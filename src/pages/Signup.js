import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import SignupForm from "../components/SignupForm";

class Signup extends Component {
  
  state = {
    username: "",
    surname: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, surname, password } = this.state;
    this.props.signup({ username, surname, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignupForm/>
    );
  }
}

export default withAuth(Signup);



