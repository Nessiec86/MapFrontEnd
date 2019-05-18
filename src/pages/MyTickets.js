import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";
import TicketService from "../lib/ticket-service";
import LoadingDots  from "../components/LoadingDots";

class Tickets extends Component {
    state = {
        list: {},
        status: "loading"
    }
    
    componentDidMount(){
        
        TicketService.joined()
            .then((list) => {
                this.setState({
                    list,
                    status: "loaded"
                });
            })
            .catch(error => {
                this.setState({
                    status: "error"
            });
        });
    }
    
    render() {
        
        switch (this.state.status) {
            case "loading":
            return <LoadingDots/>;
            case "loaded":
            return (
                <div className="App">
                    <Navbar/>
                    <h1>MyTickets</h1>
                    {this.state.list.map(list => {
                        return <li key={list._id}>{list.tkName}<img src={list.tkImage} alt="Tk"></img></li>;
                    })}
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
