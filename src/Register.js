import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import axios from 'axios'
import Login from './Login'

class Register extends React.Component {
    constructor(props){
        super(props)
        this.state={
            fistName: "",
            lastName: "",
            email: "",
            password: ""
        }
    }   

    handleClick(e) {
        var apiBaseUrl = "http://localhost:4000/api/";
        console.log("Values",
        this.state.fistName,
        this.state.lastName,
        this.state.email,
        this.state.password);
    //To be done:check for empty values before hitting submit
        var self = this;
        var payLoad = {
            "firstName": this.state.fistName,
            "lastName": this.state.lastName,
            "email": this.state.email,
            "password": this.state.password
    }
    axios.post(apiBaseUrl + '/register', payLoad)
    .then(function(response) {
        console.log(response)
        if (response.data.code === 200) {
            console.log("registration sucressful");
            var loginScreen = [];
            loginScreen.push(<Login parentContent={this} />);
            var loginMessage = "Not registered yet, Go to registration"
            self.props.parentContent.setState({
                loginScreen: loginScreen,
                loginMessage: loginMessage,
                buttonLabel: "Register",
                isLogin: true
            });
        }
    })
    .catch(function(error){
        console.log(error)
    });
}

    render() {
        return(
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title="register" />
                        <TextField
                        hintText="Enter your first name"
                        floatingLabelText="FirstName"
                        onChange={(event, newValue) => {
                            this.setState({
                                fistName: newValue
                            })
                        }} />
                        <br/>
                        <TextField
                        hintText="Enter your last name"
                        floatingLabelText="LastName"
                        onChange={(event, newValue) => {
                            this.setState({
                                lastName: newValue
                            })
                        }} />
                        <br/><TextField
                        hintText="Enter your email"
                        floatingLabelText="Email"
                        onChange={(event, newValue) => {
                            this.setState({
                                email: newValue
                            })
                        }} />
                        <br/><TextField
                        hintText="Enter your password"
                        floatingLabelText="Password"
                        onChange={(event, newValue) => {
                            this.setState({
                                password: newValue
                            })
                        }} />
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style} 
                        onClick={(event) => this.handleClick(event)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15,
}

export default Register;