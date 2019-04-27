import axios from "axios";

class Ticket {
  constructor() {
    this.Ticket = axios.create({
      baseURL: process.env.REACT_APP_PUBLIC_DOMAIN,
      withCredentials: true
    });
  }

  
  read () {
    // const { tkName, tkImage } = ticket;
    return this.Ticket
      .get("/tickets/list")
      .then(({ data }) => data);
    }
}

const ticket = new Ticket();

export default ticket;
