import React from 'react';
import './App.css';
import LoginScreen from './LoginScreen';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginPage: [],
      uploadScreen: []
    }
  }

  componentWillMount() {
    var loginPage = [];
    loginPage.push(<LoginScreen key={0} parentContent={this}/>);
    this.setState({
      loginPage: loginPage
    })
  }

  render() {
    return(
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}

export default App;