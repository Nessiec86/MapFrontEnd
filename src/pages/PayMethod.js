import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";


class Payment extends Component {
    
  render() {
    const card = this.props.location.state.card
    const ticket = this.props.location.state.list 
    
    return (
        <>
        <div className="myContainer-sesion">
            <h2>Selected!</h2>
            <div className="tk-info">
                <img src={ticket.tkImage} alt="ticket"></img>
                <div>
                    <p>{ticket.tkName}</p>
                    <p>{ticket.tkZones}Zone</p>
                    <p>{ticket.tkPrice}€</p>
                </div>
            </div>
                <div className="line-grey"></div>
            <div className="select-pay">
                <h2>Select payment method</h2>
                <p>We will renovate automatically your ticket when it is over. You can change your fare & payment method whenever you want or unsuscribe</p>
            </div>
            <li style={{listStyle: "none", margin: "2rem 0 0 0"}}>
                <div className="card--select" style={{display: "flex"}}>
                    <button>
                        <Link to={{
                            pathname: `/tickets/pay`,
                            state: { 
                            ticket,
                        }}}>New Credit Card<img src="../Images/back@3x.png" alt="arrow" style={{margin: "0px 0rem 1px 6px"}}/></Link>
                    </button>
                </div>
                <div className="card--select" style={{display: "flex"}}>
                    <button>
                        <Link to={{
                            pathname: `/tickets/myCards`,
                            state: { 
                            card,
                        }}}>My credit Cards<img src="../Images/back@3x.png" alt="arrow" style={{margin: "0px 0rem 1px 6px"}}/>
                        </Link>
                    </button>
                </div>
            </li>
        </div>
        </>
       );
    }
}

export default withAuth(Payment);