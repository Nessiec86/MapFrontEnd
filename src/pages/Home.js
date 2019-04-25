import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Home extends Component {
    render(){
        const { user, logout, isLoggedin } = this.props;
        return (
            <div>
            {isLoggedin ? (
            <>
                <p>username: {user.username}</p>
                <button onClick={logout}>LOG OUT</button>
            
            </>
            ) : (
            <>
            <div className="container">
                <h1>SMAR-T</h1>
            </div>
            <div className="buttons">
                <button><Link to="/login">LOG IN</Link></button>
                <button><Link to="/signup">GET STARTED</Link></button>
            </div>
            </>
            )}
        </div>
        );
    }
}

  
export default withAuth(Home);
