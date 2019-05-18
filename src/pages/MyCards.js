import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";


class Payment extends Component {
    
    
  render() {
     const card = this.props.location.state.card
      return (
        <div className="myContainer">
            <h1 className="cards-h1">Select your Card</h1>
            <section className="cards">
                {card.map((card, index) => {
                    return  <div  key={index} className="cards--content">
                            <li className="card--select--li" key={card._id}>{}
                            <div className="apple-card">
                                <p style={{margin: "7rem 0 0 -3rem"}}>{card.cardnum}</p>
                                <p style={{margin: "-1rem 0 0 -2rem"}}>{card.cardname}</p>
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
                })}
            </section>
            
        </div>
       );
                        
    }
}

export default withAuth(Payment);