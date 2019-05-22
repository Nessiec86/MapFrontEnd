import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TicketService from "../lib/ticket-service";
import authService from "../lib/auth-service";

class Counter extends Component {

  state = {
    counter: this.props.trips,
    ticketId: this.props.ticketId,
  };
  
  handleDelete(ticketId){
    TicketService.delete(ticketId)
  }

  handleDecrease = (trips, ticketId) => {
    this.setState({ 
      counter: trips - 1,
    });
    this.props.getTrips(trips)
    authService.updateTrip(this.state)
  };
  
  render() {
    const tripsRemaining = this.state.counter
    const ticketId = this.state.ticketId

    if (tripsRemaining === 0) {
      this.handleDelete(ticketId)
    }

    return ( 
      tripsRemaining !== 0 ?
      <div>
        <div className="ticket-config" style={{margin: "-2.5rem auto 1rem auto"}}>
          <button onClick={() => this.handleDecrease(tripsRemaining, ticketId)} style={{display:"flex"}}>
            <img src="../Images/final-nfc-vector-black@3x.png" alt="nfc"/>
            <p style={{margin: "0.5rem 3rem 0 0"}}>PAY</p>
          </button>
        </div>
        <div className="travels">
          <p>Travels:{tripsRemaining}</p>
          <p>Expires: 31 Dic 2019</p>
        </div>
      </div>
      :
      <div className="ticket-config" style={{margin: "-1.5rem auto 1rem auto"}}>
        <Link to="/tickets/" onClick={() => this.handleDelete(ticketId)} style={{margin:"1rem 0 0 0"}}><p>BUY!</p></Link>
      </div>
    );
  }
}

export default Counter;
