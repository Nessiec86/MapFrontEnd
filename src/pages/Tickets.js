import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import TicketService from "../lib/ticket-service";
import Card from "../lib/card-service";
import Navbar from "../components/Navbar";
import LoadingDots  from "../components/LoadingDots";
import { Link } from "react-router-dom";


class Tickets extends Component {
    state = {
        list: [],
        card: [],
        status: "loading"
    }
    componentDidMount(){
        TicketService.read()
            .then((list) => {
                this.setState({
                    list,
                    });
              Card.read()
                .then((card) => {
                    this.setState({
                        card,
                        status: "loaded"
                    });
                })
            })
            .catch(error => {
                console.log("error", error);
                this.setState({
                    status: "error"
            });
        });
    }


    handleSelect = (ticketId) => {
        TicketService.join(ticketId)
        // this.props.history.push("/tickets/pay",)
    }
        
    render() {
        console.log(this.state.list)
        const card = this.state.card
        switch (this.state.status) {
            case "loading":
              return <LoadingDots/>;
            case "loaded":
              return (
                  <div className="myContainer">
                    <h1 className="cards-h1">Select your fare</h1>
                    <section className="cards">
                    {this.state.list.map((list, index) => {
                        return <div key={index} className="cards--content">
                          <li className="card--content--li" >{list.tkName}
                            <img src={list.tkImage} alt="Tk"></img>
                            <div>
                                <p>Trips  {list.tkTrips}</p>
                                <p>{list.tkPrice}€</p>
                            <div className="card--select">
                                <button onClick={() => this.handleSelect(list._id)} style={{display: "flex"}}>
                                <Link to={{
                                    pathname: `/tickets/paymethod`,
                                    state: {
                                        list,
                                        card
                                    }}}>SELECT THIS FARE<img src="../Images/back@3x.png" alt="arrow" style={{margin: "0px 0rem 1px 6px"}}/></Link>
                                </button>
                                </div>
                            </div>
                          </li>
                        </div>
                                
                    },)}
                    </section>
                <div style={{ margin:'-3.5rem 0 0 0' }}>
                    <Navbar/>
                </div>
                </div>
                );
            case "error":
                return "error!!!! ";
            default:
                break;
        }
    }
}

export default withAuth(Tickets);
