import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

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
    console.log(event.target)
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, surname, password } = this.state;
    return (
      <>
      <h2>Sign up with e-mail</h2>
      <div className="sign_profile">
        <p>{this.state.username}</p>
        <p>{this.state.surname}</p>
        <p>{this.state.password}</p>
      </div>
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="sign">
            <label>Name</label>
              <input 
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              />
              <div className="line"></div>
          </div>
          <div className="sign">
            <label>Surname</label>
              <input
              type="text"
              name="surname"
              value={surname}
              onChange={this.handleChange}
              />
              <div className="line"></div>
          </div>
          <div className="sign">
            <label>Password</label>
              <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              />
              <div className="line"></div>
          </div>
          <input type="submit" value="Signup" />
        </form>
        <p>
          Already have account?
          <button><Link to={"/login"}>Login</Link></button>
        </p>
      </div>
      </>
    );
  }
}

export default withAuth(Signup);
