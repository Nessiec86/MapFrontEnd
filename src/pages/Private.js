import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


class Private extends Component {
  render() {
    return (
      <div className="container">
        <Navbar/>
        <h1>Welcome {this.props.user.username}</h1>
          <div>
          <Link to="/tickets/" >Tickets</Link>
          </div>
          <div>
        <Link to="/MyTickets/" >MyTickets</Link>
        </div>
      </div>
    );
  }
}

export default withAuth(Private);
