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
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, surname, password } = this.state;
    return (
      <>
      <h2>Sign up</h2>
      <div className="sign_profile">
        <img src="../Images/avatar@2x.png" width="74px" height="74px"  alt="avatar"></img>
        <div>
          <p>{this.state.username}</p>
          <p>{this.state.surname}</p>
        </div>
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
          <div className="btn-signup">
          <input type="submit" value="NEXT" />
          </div>
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
