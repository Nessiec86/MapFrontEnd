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
                <section className="card-logo">
                    <div className="card--content-logo">
                        <img src="./Images/group-2@3x.png" alt="group"></img>
                    </div>
                    <div className="card--content-logo">
                        <img src="./Images/group@3x.png" alt="group2"></img>
                    </div>
                    <div className="card--content-logo">
                        <img src="./Images/group-4@3x.png" alt="group3"></img>
                    </div>
                </section>
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
