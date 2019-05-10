import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

class WithTicket extends Component {
    render () {
        const list = this.props.tickets;
        
        return (
            <div className="container">
                <div className="home-background">
                    <h1>Welcome {this.props.user.username}!</h1>
                </div>
                {list && list.map(list => {
                    return  <li key={list.tkName}>
                                <div className="edit">
                                    <Link to={{
                                        pathname: `/tickets/edit`,
                                        state: { 
                                        list,
                                        }}}>
                                        <img src="./Images/pencil-alt-solid.svg" alt="pencil"></img>
                                    </Link>
                                </div>
                                <div className="ticket-background-ok">
                                    <img src={list.tkImage} alt="Tk"></img>
                                </div>
                            </li>
                            })
                }
                <Navbar/>
            </div>                
        )
    }
}

export default withAuth(WithTicket);