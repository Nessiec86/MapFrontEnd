import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Counter from "../components/Counter";


class WithTicket extends Component {

    state = {
        trips: 2,
    }

    get = (trips) => {
        this.setState({
            trips: trips,
        })
    }

    render () {
        const username = this.props.user.username;
        const tripsRemainig = this.state.trips;
        const list = this.props.tickets;

        return (
            <div className="myContainer">
                <div className="home-background">
                    <img src="../Images/bg-image@3x.jpg" alt="bcn" />
                    <h1>Welcome {username}!</h1>
                </div>
                {list && list.map((list, index) => {
                    return  ( tripsRemainig !== 1 ?
                            <li key={index}>
                                <div className="edit">
                                    <Link to={{
                                        pathname: `/tickets/edit`,
                                        state: { 
                                        list,
                                        }}}>
                                        <img src="../Images/pencil-alt-solid.svg" alt="pencil"/> 
                                    </Link> 
                                </div>
                                <div className="ticket-background-ok">
                                    <img src={list.tkImage} alt="Tk"></img>
                                </div> 
                                <div>
                                    <Counter trips = { list.tkTrips } getTrips = {this.get} ticketId = { list._id }/>
                                </div>        
                            </li>
                    :   <li key={index} style={{margin:"0 0 4rem 0"}}>
                        <div className="edit">
                            <Link to={{
                                pathname: `/tickets/edit`,
                                state: { 
                                list,
                                }}}>
                                <img src="../Images/pencil-alt-solid.svg" alt="pencil"/> 
                            </Link> 
                        </div>
                        <div className="ticket-background-notok">
                            <img src={list.tkImage} alt="Tk"></img>
                        </div> 
                        <div>
                            <Counter trips = { list.tkTrips } getTrips = {this.get} ticketId = { list._id }/>
                        </div>        
                    </li>
                    )})
                }
                <div  style={{margin: "-6rem 0 0 0"}}>
                    <Navbar/>
                </div>
            </div>                
        )
    }
}

export default withAuth(WithTicket);