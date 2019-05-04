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
            <div className="logo">
                <img src="../Images/logo@2x.png" alt="logo"></img>
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
