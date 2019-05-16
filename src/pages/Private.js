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
  }

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
            console.log("error", error);
            this.setState({
                status: "error",
                isLoading: false
        });
    });
    
  }
  
  render () {
    const { isLoading } = this.state;
    const { list } = this.state;
    const { user } = this.state;
    console.log(list)
    console.log (user)  
    return isLoading ?
      <LoadingDots/> :
      list.length !== 0 ?
      <WithTicket with tickeys tickets={ list } usertickets={ user } />
      :
      <WhithoutTicket sin tickets />
  }
}

export default withAuth(Private);
