import { Form } from "react-bootstrap";
import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class LoginForm extends Component {
    constructor(...args) {
        super(...args);
        this.state = { 
            validated: false, 
            username: "",
            password: ""
        };
    };
     
    handleSubmit = event => {
        const form = event.currentTarget;
        const { username, password } = this.state;
            
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            this.props.login({ username, password });
        }
        this.setState({ validated: true });
    }
    
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    
    render() {
        const { username, surname, password, validated } = this.state;
      
        return (
            <div className="myContainer-sesion">
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={e => this.handleSubmit(e)}
                >
                    <h2 className='center-log'>Login</h2>
                    <div className="sign_profile">
                        <img src="../Images/avatar@2x.png" width="74px" height="74px"  alt="avatar"></img>
                        <div className="data">
                            <p>{username}</p>
                            <p>{surname}</p>
                        </div>
                    </div>
                <Form.Group controlId="validationCustom01" className="sign">
                    <Form.Label style={{margin: "2rem 0 -2rem 0"}}>Username:</Form.Label>
                    <Form.Control 
                        required
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                        style={{margin: "2rem 0 0 0"}}
                    />
                    <div className="line"></div>
                    <Form.Control.Feedback type="invalid">
                        Username is required.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Nice Username!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustom02" className="sign">
                    <Form.Label style={{margin: "2rem 0 0 0"}}>Password:</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}              
                    />
                    <div className="line"></div>
                    <Form.Control.Feedback type="invalid">
                        Password is required.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Well done!</Form.Control.Feedback>
                </Form.Group>
                <div className="btn-signup">
                    <input type="submit" value="LOGIN" />
                </div>
                </Form>
            </div>
        );
    }
}
  
export default withAuth(LoginForm);