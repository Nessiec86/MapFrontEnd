import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import LoginForm from "../components/LoginForm";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
  };

  
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <>
      <LoginForm/>
      {/* <div className="myContainer-sesion">
        <h2>Login</h2>
        <div className="sign_profile">
          <img src="../Images/avatar@2x.png" width="74px" height="74px"  alt="avatar"></img>
          <div>
            <p>{this.state.username}</p>
            <p>{this.state.surname}</p>
          </div>
        </div>
      <form onSubmit={this.handleFormSubmit}>
        <div className="sign">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <div className="line"></div>
        </div>
        <div className="sign">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        <div className="line"></div>
        </div>
        <div className="btn-signup">
          <input type="submit" value="LOGIN" />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div> */}
    </>
    );
  }

}

export default withAuth(Login);
