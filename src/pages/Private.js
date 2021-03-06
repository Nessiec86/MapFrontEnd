import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import TicketService from "../lib/ticket-service";
import LoadingDots  from "../components/LoadingDots";
import WithTicket from "../components/WithTicket";
import WhithoutTicket from "../components/WithoutTicket";
import AuthService from "../lib/auth-service";

class Private extends Component {
  
  state = {
    user: {},
    list: [],
    isLoading: true,
    status: "loading"
  };

  componentDidMount(){
    TicketService.joined()
      .then((list) => {
        AuthService.me()
          .then((user) => {
            this.setState({
              user,
              list,
              status: "loaded",
              isLoading: false
            });
          })
      })
      .catch(error => {
        this.setState({
          status: "error",
          isLoading: false
        });
      });
  };
  
  render () {
    const { isLoading } = this.state;
    const { list } = this.state;
    const { user } = this.state;
    
    return isLoading ?
      <LoadingDots/> :
        list.length !== 0 ?
        <WithTicket  tickets={ list } usertickets={ user } />
      :
        <WhithoutTicket />
  }
}

export default withAuth(Private);
