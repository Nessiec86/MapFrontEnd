import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

class WhithoutTicket extends Component  {
  render () {
    return (
      <div className="container">
        <div className="home-background">
          <img src="../Images/bg-image@3x.jpg" alt="bcn"></img>
          <h1>Welcome {this.props.user.username}!</h1>
          <p>Configure your fare and payment method.</p>
        </div>
        <div className="ticket-background">
          <img src="../Images/tickets-no-fare@3x.png" alt="Ticket"></img>
          <div className="ticket-config">
            <Link to="/Config/" component={Navbar} eeeee={this.props}>CONFIGURE</Link>
          </div>
        </div>
        <Navbar/>
      </div>
    )
  }
}


export default withAuth(WhithoutTicket);