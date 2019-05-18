import axios from "axios";

class Ticket {
  constructor() {
    this.Ticket = axios.create({
      baseURL: process.env.REACT_APP_PUBLIC_DOMAIN,
      withCredentials: true
    });
  }

  create () {
    return this.Ticket
      .post("tickets/new")
      .then(({ data }) => data);
  }
  read () {
    return this.Ticket
    .get("tickets/list")
    .then(({ data }) => data);
  }
  
  ticket () {
    return this.Ticket
      .get("tickets/list/:id")
      .then(({ data }) => data);
  }
  
  join (ticketId) {
    return this.Ticket
      .put(`tickets/list/${ticketId}`)
      .then(({ data }) => data);
  }
  
  joined () {
    return this.Ticket
    .get("tickets/joined")
    .then(({ data }) => data);
  }

  updateTrip (state) {
    return this.Ticket
      // .put(`tickets/trip/`, state )
      // .then(({ data }) => data);
  }

  delete (ticketId) {
    return this.Ticket
      .post(`tickets/edit/${ticketId}`)
      .then(({ data }) => data);
  }
}

const ticket = new Ticket();

export default ticket;
