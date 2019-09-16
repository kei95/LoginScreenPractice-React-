import React from 'react';
import MuiThemProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Axios from 'axios';

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
        }
    }

    handleClick(event) {
        var apiBaseUrl = "http://localhost:4000/api/";
        var self = this;
        var payload = {
            "email": this.state.username,
            "password": this.state.password
        }
        Axios.post(apiBaseUrl + 'login', payload)
        .then(function (response) {
            console.log(response);
            if (response.data.code === 200) {
                console.log("loggin succesful")
                var uploadScreen = [];
                uploadScreen.push(<uploadScreen appContent={self.props.appContent}/>)
                self.props.appContent.setState({
                    loginPage: [],
                    uploadScreen: uploadScreen
                })
            } else if (response.data.code === 204){
                console.log("User name password do not match");
                alert("User Name Password do not match");
            } else {
                console.log("User name does not exists")
                alert("User Name does not exists")
            }
        }).catch (function(error) {
            console.log(error)
        });
    }

    render() {
        return(
            <div>
                <MuiThemProvider>
                    <div>
                        <AppBar title="login" />
                        <TextField 
                        hintText="Enter your user name"
                        floatingLabelText="Username"
                        onChange = {(event, newValue) => this.setState({username: newValue})}/>
                        <br/>
                        <TextField
                        type="password"
                        hintText="Enter your Password"
                        floatingLabelText="Password"
                        onChange = {(event, newValue) => this.setState({password: newValue})}/>
                        <br/>
                        <RaisedButton 
                        label="Submit"
                        primary={true}
                        style={style}
                        onClick={(event) => this.handleClick(event)}/>
                    </div>
                </MuiThemProvider>
            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default Login;