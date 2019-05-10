import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

class WhithoutTicket extends Component  {
  render () {
    return (
      <div className="container">
        <div className="home-background">
          <h1>Welcome {this.props.user.username}!</h1>
          <p>Configure your fare and payment method.</p>
        </div>
        <div className="ticket-background">
          <div className="ticket-config">
            <Link to="/Config/" >CONFIGURE</Link>
          </div>
        </div>
        <Navbar/>
      </div>
    )
  }
}


export default withAuth(WhithoutTicket);