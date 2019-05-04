import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import TicketService from "../lib/ticket-service";
import Navbar from "../components/Navbar";

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

        console.log(ticketId)
        TicketService.join(ticketId)
        this.props.history.push("/private")
    }
        
    render() {
        switch (this.state.status) {
            case "loading":
              return "loading...";
            case "loaded":
              return (
                  <div className="App">
                    <h1>tickets</h1>
                    {this.state.list.map(list => {
                        return  <li key={list.tkName}>{list.tkName}
                            <img src={list.tkImage} alt="Tk"></img>
                            <button onClick={() => this.handleSelect(list._id)}>Select</button>
                            </li>
                    },)}
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
