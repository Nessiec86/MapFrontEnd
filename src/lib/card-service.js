import axios from "axios";

class Card {
  constructor() {
    this.Card = axios.create({
      baseURL: process.env.REACT_APP_PUBLIC_DOMAIN,
      withCredentials: true
    });
  }

  create (card) {
    const { cardname, cardnum, vadil, controlnum, userId } = card;
    return this.Card
      .post("profile/pay", { cardname, cardnum, vadil, controlnum, userId })
      .then(({ data }) => data);
  }
  read () {
    return this.Card
    .get("profile/card")
    .then(({ data }) => data);
  }
  
  delete (cardId) {
    return this.Card
      .delete(`profile/card/${cardId}`)
      .then(({ data }) => data);
  }

  // join (cardId) {
  //   return this.Card
  //   .put(`profile/pay/${cardId}`)
  //   .then(({ data }) => data);
  // }

  // myCards () {
  //  return this.Card
  //   .get("profile/mycards")
  //   .then(({data}) => data);
  // }

  
  
}

const card = new Card();

export default card;
