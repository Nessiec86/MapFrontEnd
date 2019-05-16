import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Card from "../lib/card-service";


class Payment extends Component {
    state = {
        cardname: "",
        cardnum: "",
        vadil: "",
        controlnum: ""
      };

      handleSelect (state) {
        const { cardname, cardnum, vadil, controlnum } = state;
        Card.create({ cardname, cardnum, vadil, controlnum });
        this.props.history.push("/private")
    
        
      }
    //   handleFormSubmit = event => {
    //     event.preventDefault();
    //     const { cardname, cardnum, vadil, controlnum, userId } = this.state;
    //     Card.create({ cardname, cardnum, vadil, controlnum, userId });
    //     this.props.history.push("/private")
    
    //   };
    
      handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
    

  render() {
      const ticket = this.props.location.state.ticket 
      const { cardname, cardnum, vadil, controlnum } = this.state;
      return (
        <>
      <div className="myContainer-sesion">
        <h1>Well done!</h1>
            <div className="tk-info">
                <img src={ticket.tkImage} alt="ticket"></img>
                <div>
                    <p>{ticket.tkName}</p>
                    <p>{ticket.tkZones}Zone</p>
                    <p>{ticket.tkPrice}€</p>
                    
                </div>
        
            </div>
                <div className="line-grey"></div>
            <div>
                <h1>Configure your payment method</h1>
                <p>We will renovate automatically your ticket when it is over. You can change your fare & payment method whenever you want or unsuscribe</p>
            </div>
            <div className="sign">
                <label>Cardholder name:</label>
                <input
                    type="text"
                    name="cardname"
                    value={cardname}
                    onChange={this.handleChange}
                />
            <div className="line"></div>
            </div>
                <div className="sign">
                        <label>Card number:</label>
                <input
                    type="number"
                    name="cardnum"
                    value={cardnum}
                    onChange={this.handleChange}
                />
            <div className="line"></div>
            </div>
            <div className="sign">
                        <label>Vadilate:</label>
                <input
                    type="date"
                    name="vadil"
                    value={vadil}
                    onChange={this.handleChange}
                />
            <div className="line"></div>
            </div>
            <div className="sign-ccv">
                        <label>Control Number:</label>
                <input 
                    className="sign-input-ccv"
                    type="number"
                    name="controlnum"
                    value={controlnum}
                    onChange={this.handleChange}
                />
                <p>What’s that?</p>
            </div>
            <div className="btn-signup">
                <button onClick={() => this.handleSelect(this.state)}>PAY</button>
            </div>
        </div>
        </>
    );
  }
}

export default withAuth(Payment);