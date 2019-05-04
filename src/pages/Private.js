import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import TicketService from "../lib/ticket-service";


class Private extends Component {
  state = {
    list: [],
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
            console.log("error", error);
            this.setState({
                status: "error"
        });
    });
}
  render() {
    const { myTickets } = this.props.user;
    const { list } = this.state;
    return (
      <div className="container">
        {myTickets.length > 0 ? (
          <>
            <div className="home-background">
              <h1>Welcome {this.props.user.username}!</h1>
            </div>
              {list && list.map(list => {
                return  <li key={list.tkName}>
                  {/* <div className="ticket-name">
                    <p>{list.tkName}</p>
                    </div> */}
                    <div className="edit">
                    </div>
                    <div className="ticket-background">
                      <img src={list.tkImage} alt="Tk"></img>
                    </div>
              </li>
        },)}
          </>
          ) : (
          <>
            <div className="home-background">
              <h1>Welcome {this.props.user.username}!</h1>
              <p>Configure your fare and payment method.</p>
            </div>
            <div className="ticket-background">
              <div className="ticket-config">
                <Link to="/Config/" >Configure</Link>
              </div>
            </div>
          </>
          )}
      <Navbar/>
      </div>
    );
  }
}

export default withAuth(Private);
