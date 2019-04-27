// import React, { Component } from "react";
// import Ticket from "./ticket-service";
// const { Consumer, Provider } = React.createContext();

// export { Consumer };

// export const withAuth = Comp => {
//   return class WithAuth extends Component {
//     render() {
//       return (
//         <Consumer>
//           {TicketStore => {
//             return (
//               <Comp
//                 read={TicketStore.read}
//                 {...this.props}
//               />
//             );
//           }}
//         </Consumer>
//       );
//     }
//   };
// };

// class TicketProvider extends Component {
//     state = {
//         ticket: null,
//         isLoading: true
//       };
    
//       componentDidMount() {
//         Ticket
//           .read()
//           .then(ticket => {
//             this.setState({
//               ticket,
//               isLoading: false
//             });
//           })
//           .catch(() => {
//             this.setState({
//               ticket: null,
//               isLoading: false
//             });
//           });
//       }

//   read = ticket => {
//     const { tkName, tkImage } = ticket;
//     Ticket
//       .read({ tkName, tkImage })
//       .then(ticket => {
//         this.setState({
//           ticket
//         });
//       })
//       .catch(({ response: { data: error } }) => {
//         this.setState({
//           message: error.statusMessage
//         });
//       });
//   };

  
//   render() {
//     const { isLoading, ticket } = this.state;
//     return isLoading ? (
//       <div>Loading</div>
//     ) : (
//       <Provider
//         value={{
//           ticket,
//           tkRead: this.read
//         }}
//       >
//         {this.props.children}
//       </Provider>
//     );
//   }
// }

// export default TicketProvider;