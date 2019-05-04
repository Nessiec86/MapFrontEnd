import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


class Private extends Component {
  render() {
    return (
      <div className="container">
          <div>
          <Link to="/tickets/" >Tickets</Link>
          </div>
          <div>
        <Link to="/MyTickets/" >MyTickets</Link>
        </div>

      <Navbar/>
      </div>

    );
  }
}

export default withAuth(Private);