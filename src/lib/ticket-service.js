import axios from "axios";

class Ticket {
  constructor() {
    this.auth = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
  }

  create(user) {
    const { username, password } = user;
    return this.auth
      .post("/auth/signup", { username, password })
      .then(({ data }) => data);
  }

  read(user) {
    const { username, password } = user;
    return this.auth
      .post("/auth/login", { username, password })
      .then(({ data }) => data);
  }

  update() {
    return this.auth
    .post("/auth/logout", {})
    .then(response => response.data);
  }

  delete() {
    return this.auth
    .get("/auth/me")
    .then(response => response.data);
  }
}

const ticket = new Ticket();

export default ticket;
