import axios from "axios";

class Card {
  constructor() {
    this.Card = axios.create({
      baseURL: process.env.REACT_APP_PUBLIC_DOMAIN,
      withCredentials: true
    });
  }

  create (card) {
    const { cardname, cardnum, vadil, controlnum } = card;
    console.log(card)
    return this.Card
      .post("tickets/pay", { cardname, cardnum, vadil, controlnum })
      .then(({ data }) => data);
  }
  read () {
    return this.Card
    .get("private/profile")
    .then(({ data }) => data);
  }

  delete () {
    return this.Card
      .post(`tickets/edit/`)
      .then(({ data }) => data);
  }
}

const card = new Card();

export default card;
