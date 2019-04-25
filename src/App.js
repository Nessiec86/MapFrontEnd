import React, { Component } from "react";
import AuthProvider from "./lib/AuthProvider";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import Home from "./pages/Home";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./components/NotFound";

class App extends Component {
      
  render() {
    return (
      <AuthProvider>
        <Switch>
            <AnonRoute exact path="/" component={Home} />
            <AnonRoute exact path="/login" component={Login} />
            <AnonRoute exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/private" component={Private} />
            <Route path='*' exact={true} component={NotFound} />
        </Switch>
      </AuthProvider>
    );
  }
}

export default App;