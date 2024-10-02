import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as loginActions from '../../actions/loginActions';
//import './LoginForm.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //email:"",
      userName:"",
      password:""
    }
    this.handleInputChange  = this.handleInputChange .bind(this);
    //this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    //console.log("name="+value);
    this.setState({
     [name]: value
   });
  }



  render() {
    //let {userName, password} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
    return (
      <form name="loginForm" onSubmit={this.onSubmit}>
        <div className="form-group-collection">
          <div className="form-group">
            <label>Email:</label>
            <input type="text" name="userName" onChange={this.handleInputChange} value={this.state.userName}/>
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" onChange={this.handleInputChange} value={this.state.password}/>
          </div>
        </div>

        <input type="submit" value="Login" />

        <div className="message">
          { isLoginPending && <div>Please wait...</div> }
          { isLoginSuccess && <div>Login success. {isLoginSuccess}</div> }
          { loginError && <div>{loginError}</div> }
        </div>
      </form>
    )
  }

  onSubmit(e) {
    e.preventDefault();
    let { userName, password } = this.state;
    this.props.login(userName, password);
    this.setState({
      userName: '',
      password: ''
    });
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.loginReducer.isLoginPending,
    isLoginSuccess: state.loginReducer.isLoginSuccess,
    loginError: state.loginReducer.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userName, password) => dispatch(loginActions.login(userName, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
