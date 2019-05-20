import React, { Component } from "react";
import AuthProvider from "./lib/AuthProvider";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import Home from "./pages/Home";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import Tickets from "./pages/Tickets";
import PayMethod from "./pages/PayMethod";
import MyCards from "./pages/MyCards";
import Payment from "./pages/Payment";
import Edit from "./pages/Edit";
import MyTickets from "./pages/MyTickets";
import NotFound from "./components/NotFound";
import Config from "./pages/Config";
import  "./App.css";

class App extends Component {
      
  render() {
    return (
      <AuthProvider>
        <Switch>
            <AnonRoute exact path="/" component={Home} />
            <AnonRoute exact path="/login" component={Login} />
            <AnonRoute exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/private" component={Private} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/profile/edit" component={ProfileEdit} />
            <PrivateRoute exact path="/tickets" component={Tickets} />
            <PrivateRoute exact path="/tickets/payMethod" component={PayMethod} />
            <PrivateRoute exact path="/tickets/myCards" component={MyCards} />
            <PrivateRoute exact path="/tickets/pay" component={Payment} />
            <PrivateRoute exact path="/tickets/edit" component={Edit} />
            <PrivateRoute exact path="/MyTickets" component={MyTickets} />
            <PrivateRoute exact path="/Config" component={Config}/>
            <Route path='*' exact={true} component={NotFound} />
        </Switch>
      </AuthProvider>
    );
  }
}

export default App;