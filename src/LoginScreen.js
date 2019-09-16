import React from 'react';
import MuithemeProvider from 'material-ui/styles/MuiThemeProvider';
import Register from './Register';
import Login from './Login'
import { RaisedButton } from 'material-ui';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            userName: "",
            password: "",
            loginScreen: [],
            loginMessage: "",
            buttonLabel: "Register",
            isLogin: true
        }
    }

    componentWillMount() {
        var loginScreen = [];
        loginScreen.push(<Login key={0} parentContext={this} appContent={this.props.parentContext} />);
        var loginMessage = "Not registered yet, Register Now";
        this.setState({
            loginScreen: loginScreen,
            loginMessage: loginMessage
        })
    }

    hanldeClick(e) {
        console.log("event", e)
        var loginMessage;
        if(this.state.isLogin){
            var loginScreen = [];
            loginScreen.push(<Register key={0} parentContext={this}/>);
            loginMessage = "Already registered. Go to Login";
            this.setState({
                loginScreen: loginScreen,
                loginMessage: loginMessage,
                buttonLabel: "Login",
                isLogin: false
            })
        } else {
            loginScreen = [];
            loginScreen.push(<Login key={1} parentContext={this}/>);
            loginMessage = "Not Registered yet. Go to registration";
            this.setState({
                loginScreen: loginScreen,
                loginMessage: loginMessage,
                buttonLabel: "Register",
                isLogin: true
            })
        }
    }

    render() {
        return(
            <div className = "loginScreen">
                {this.state.loginScreen}
                <div>
                    {this.state.loginMessage}
                    <MuithemeProvider>
                        <div>
                            <RaisedButton 
                            key={0} 
                            label={this.state.buttonLabel}
                            primary={true}
                            style={style}
                            onClick={(e) => {
                                this.hanldeClick(e)
                            }} />
                        </div>
                    </MuithemeProvider>
                </div>
            </div>
        );
    }
}

const style = {
    margin: 15
}

export default LoginScreen;