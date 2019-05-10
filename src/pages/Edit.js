import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";
import TicketService from "../lib/ticket-service";

class Edit extends Component {

    handleDelete(ticketId){
        TicketService.delete(ticketId)
        this.props.history.push("/private")
    }
    

    // handleUpdate(){

    // }


    render() {
    const list = [this.props.location.state.list];
    
    return (
        <div className="container">
            <div className="home-background">
                <h1>Your Smar-T</h1>
            </div>
                {list && list.map(list => {
                       
                    return  <li key={list}>
                        <div className="edit">
                            <img src="../Images/trash-alt-solid.svg" alt="trash" onClick={() => this.handleDelete(list._id)}></img>
                        </div>
                        <div className="ticket-background-ok">
                            <img src={list.tkImage} alt="Tk"></img>
                        </div>
                </li>
        },)}
        <Navbar/>
        </div>
    );
  }
}

export default withAuth(Edit);