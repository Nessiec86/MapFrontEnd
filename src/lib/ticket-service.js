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
      .post("/tickets/new")
      .then(({ data }) => data);
  }
  read () {
    // const { tkName, tkImage } = ticket;
    return this.Ticket
      .get("/tickets/list")
      .then(({ data }) => data);
    }
  
  ticket () {
    return this.Ticket
      .get("/tickets/list/:id")
      .then(({ data }) => data);
  }

  join (ticketId) {
  console.log(ticketId)
  console.log("estoy en join")

    return this.Ticket
      .put(`tickets/list/${ticketId}`)
      .then(({ data }) => data);
  }
  
  joined () {
    
    return this.Ticket
    .get("/tickets/joined")
      .then(({ data }) => data);
  }
}

const ticket = new Ticket();

export default ticket;
