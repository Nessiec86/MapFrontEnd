import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

class Payment extends Component {
    
  render() {
    const card = this.props.location.state.card
    const ticket = this.props.location.state.ticket

    return (
        <div className="myContainer">
            <h1 className="cards-h1">Select your Card</h1>
            <section className="cards">
                {card ? card.map((card, index) => {
                    return  <div  key={index} className="cards--content">
                                <li className="card--select--li" key={card._id}>{}
                                    <div className="apple-card">
                                        <p style={{margin: "7rem 0 0 0.8rem"}}>{card.cardname}</p>
                                        <p style={{margin: "-1.5rem 0 0 2rem"}}>{card.cardnum}</p>
                                    </div>
                                    <div className="card--select">
                                        <button style={{display: "flex"}}>
                                        <Link to={{
                                            pathname: '/private',
                                            }}>SELECT THIS CARD TO PAY<img src="../Images/back@3x.png" alt="arrow" style={{margin: "0px 0rem 1px 6px"}}/></Link>
                                        </button>
                                    </div>
                                </li>
                            </div>
                }) :
                    <>
                    <p>No cards</p>
                    <div className="card--select" style={{display: "flex"}}>
                        <button>
                            <Link to={{
                                pathname: `/tickets/pay`,
                                state: { 
                                ticket,
                            }}}>New Credit Card<img src="../Images/back@3x.png" alt="arrow" style={{margin: "0px 0rem 1px 6px"}}/></Link>
                        </button>
                    </div>
                    </>
                }
            </section>
            <div style={{margin: '-3.5rem 0 0 0'}}>
                <Navbar/>
            </div>
        </div>
       );    
    }
}

export default withAuth(Payment);