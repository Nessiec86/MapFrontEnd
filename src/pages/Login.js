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
    return (
      <LoginForm/>
    );
  }
}

export default withAuth(Login);
