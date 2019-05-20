import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";
import LoadingDots  from "../components/LoadingDots";
import AuthService from "../lib/auth-service";

class ProfileEdit extends Component {
   
    state = {
        user: [],
        status: "loaded"
    }

    handleChange = event => {
        console.log(event)
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
    
    handleEdit = (state) => {
        console.log(state)
        AuthService.update(state)
        this.props.history.push("/profile")
    
    }
        
    componentWillMount(){
        this.setState({
            user: this.props.user,
        });
    }
    render() {
        const { username, surname } = this.state.user;
        switch (this.state.status) {
            case "loading":
              return <LoadingDots/>;
            case "loaded":
              return (
                <div className="myContainer">
                <div className="profile-background">
                    <img src="/Images/profile-placeholder@3x.png" alt="face"/>
                    <div className="profile-name">
                        <h1>{username}</h1>
                        <h1>{surname}</h1>
                    </div>
                </div>
                <section style={{margin:'1rem 0 0 0'}}>
                    <h3>Personal information</h3>
                    <div className="profile">
                        <img src="/Images/profile-placeholder@3x.png" alt="face"/>
                        <button onClick={() => this.handleEdit (this.state)}>
                            <p>Confirm</p>
                        </button>
                    </div>
                    <ul className="profile-ul">
                        <li className="profile-list">
                            <div className="profile-data">
                                <h3>Name</h3>
                                <input
                                    type="text"
                                    name="username"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </li>
                        <li className="profile-list">
                            <div className="profile-data">
                                <h3>Surname</h3>
                                <input
                                    type="text"
                                    name="surname"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </li>
                        <li className="profile-list">
                            <div className="profile-data">
                                <h3>Age</h3>
                                <input
                                    type="number"
                                    name="age"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </li>
                        <li className="profile-list">
                            <div className="profile-data">
                                <h3>Email</h3>
                                <input
                                    type="text"
                                    name="email"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </li>
                    </ul>
                    
                    </section>
                <Navbar/>
                </div>
                );
            case "error":
                return "error!!!! ";
            default:
                break;
        }
    }
}

export default withAuth(ProfileEdit);
