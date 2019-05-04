import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  
  
  handleReturn () {
    console.log(this.props.history.goBack)
    this.props.history.goBack();
  }

  
  render() {
    
    const { user, logout, isLoggedin } = this.props;
    return (
      <div className="Navbar">
        {isLoggedin ? (
          <>
          <nav>
          <div>
              <button onClick={this.handleReturn}>Return</button>
            </div>
            <div>
              <p>Welcome {user.username}</p>
            </div>
            <div>
              <button onClick={logout}>Logout</button>
            </div>
          </nav>
          </>
        ) : (
          <>
          </>
        )}
      </div>
      
    );
  }
}

export default withRouter(withAuth(Navbar));
