import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";


class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
        {isLoggedin ? (
          <>
          <nav>
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
