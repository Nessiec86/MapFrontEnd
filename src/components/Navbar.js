import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Navbar extends Component {
  
  
  handleReturn () {
    this.props.history.goBack();
  }

  
  
  render() {
    
    const { logout, isLoggedin } = this.props;
    return (
      <div className="Navbar">
        {isLoggedin ? (
          <>
          <nav>
          <div>
              <img src="../Images/expenses@3x.png" alt="log" style={{width: '3rem'}}></img>
              {/* <button onClick={this.handleReturn}>Return</button> */}
          </div>
            <div>
              <Link to="/Private/" >
                <img src="../Images/mysmar-t@3x.png" alt="my smar-t" style={{width: '3rem'}}></img>  
              </Link>
            </div>
            <div>
              <Link to="/Profile/" >
                <img src="../Images/account@3x.png" alt="my smar-t" style={{width: '3rem'}}></img>  
              </Link>
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
