import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
 

class Navbar extends Component {
  
  handleReturn () {
    console.log(this.props)
    this.props.history.goBack();
  }

  render() {
    console.log(this.props)
    
    const { user, logout, isLoggedin } = this.props;
    return (
      
      <div>
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

export default withAuth(Navbar);
