import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Card from "../lib/card-service";
import { OverlayTrigger } from "react-bootstrap";
import { Form } from "react-bootstrap";


class Payment extends Component {
    state = {
        validated: false,
        cardname: "",
        cardnum: "",
        vadil: "",
        controlnum: ""
    };

    handleSelect = state => {
        const { cardname, cardnum, vadil, controlnum } = state;
        Card.create({ cardname, cardnum, vadil, controlnum });
        this.props.history.push("/private")
    };

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const { username, password } = this.state;
            event.preventDefault();
            this.props.login({ username, password });
        }
        this.setState({ validated: true });
    }
    
      handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
   
    render() {
        const ticket = this.props.location.state.ticket 
        const { cardname, cardnum, vadil, controlnum, validated } = this.state;
        const renderTooltip = props => (
            <div
              {...props}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                padding: '1rem',
                color: 'white',
                borderRadius: 3,
                ...props.style,
              }}
            >
              The card security code is located on the back of MasterCard, Visa, Discover, Diners Club, and JCB credit or debit cards and is typically a separate group of three digits to the right of the signature strip.
            </div>
        );
        return (
            <>
            <div className="myContainer-sesion">
                <h2>Well done!</h2>
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
                    <h2>Configure your payment method</h2>
                    <p>We will renovate automatically your ticket when it is over. You can change your fare & payment method whenever you want or unsuscribe</p>
                </div>

                <Form
                    noValidate
                    validated={validated}
                    onSubmit={e => this.handleSubmit(e)}
                    
                >
                <Form.Group controlId="validationCustom01" className="sign">
                    <label>Cardholder name:</label>
                    <Form.Control 
                        className="sign"
                        type="text"
                        name="cardname"
                        value={cardname}
                        onChange={this.handleChange}
                        required
                    />
                    <div className="line"></div>
                {cardname === '' ? 
                    <Form.Control.Feedback type="invalid">
                        Card Name is required.
                    </Form.Control.Feedback> :
                    <Form.Control.Feedback>Great Cardname!</Form.Control.Feedback>
                }
                </Form.Group>
                <div className="sign">
                    <label>Card number:</label>
                    <input
                        type="number"
                        name="cardnum"
                        value={cardnum}
                        onChange={this.handleChange}
                        required
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
                        required
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
                        required
                    />
                    <OverlayTrigger 
                        placement="right-start"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >
                    <p>What's that?</p>
                    </OverlayTrigger>
                </div>
                {cardname === '' || cardnum === '' || vadil === '' || controlnum === ''?
                    <div className="btn-signup">
                        <button disabled>PAY</button>
                    </div>
                :
                    <div className="btn-signup">
                        <button onClick={() => this.handleSelect(this.state)}>PAY</button>
                    </div>
                }
                </Form>
            </div>
            </>
        );
    }
}

export default withAuth(Payment);