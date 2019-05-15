import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import TicketService from "../lib/ticket-service";
import Navbar from "../components/Navbar";
import LoadingDots  from "../components/LoadingDots";
import Payment from "../pages/Payment";
import { Link } from "react-router-dom";


class Tickets extends Component {
    state = {
        list: [],
        status: "loading"
    }
    componentDidMount(){
        TicketService.read()
            .then((list) => {
                this.setState({
                    list,
                    status: "loaded"
                });
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
        switch (this.state.status) {
            case "loading":
              return <LoadingDots/>;
            case "loaded":
              return (
                  <div className="myContainer">
                    <h1>Select your fare</h1>
                    <section className="cards">
                    {this.state.list.map(list => {
                        return <div className="cards--content">
                          <li key={list.tkName}>{list.tkName}
                            <img src={list.tkImage} alt="Tk"></img>
                            <button onClick={() => this.handleSelect(list._id)}>
                                <Link to={{
                                    pathname: `/tickets/pay`,
                                    state: { 
                                    list,
                                    }}}>Select</Link>
                            </button>
                            </li>
                            </div>
                    },)}
                    </section>
                <Navbar/>
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
