import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";
import LoadingDots  from "../components/LoadingDots";
import CardService from "../lib/card-service";

class Profile extends Component {
    state = {
        card: [],
        status: "loaded"
    }

    componentDidMount(){
        CardService.read()
            .then((card) => {
                this.setState({
                    card,
                    status: "loaded"
                });
            })
            .catch(error => {
                console.log("error", error);
                this.setState({
                    status: "error"
            });
        });
    }
        
    render() {
        const { card } = this.state;
        switch (this.state.status) {
            case "loading":
              return <LoadingDots/>;
            case "loaded":
              return (
                  <div className="myContainer">
                  <div className="profile-background">
                    <h1>{this.props.user.username}</h1>
                    </div>
                    <section className="">
                    <div>
                        <p>Edit</p>
                    </div>
                    <div>
                        <h3>Name</h3>
                        <p>{this.props.user.username}</p>
                    </div>
                    <div>
                        <h3>Surname</h3>
                        <p>{this.props.user.surname}</p>
                    </div>
                    <div>
                        <h3>Main City</h3>
                        <p>Barcelona</p>
                    </div>
                    <div>
               
                <div className="App">
                    <h1>My Credit Cards</h1>
                    {card.map(card => {
                        console.log(card.cardname)
                        return <li key={card._id}>{card.cardname}</li>;
                    })}
                </div>
               
                    </div>
                    <div>
                        
                    </div>
                    
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

export default withAuth(Profile);
