import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class SignupForm extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            validated: false, 
            username: "",
            surname: "",
            password: ""
        };
    };

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            event.preventDefault();
            const { username, surname, password } = this.state;
            this.props.signup({ username, surname, password });
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
                className="text-center"
            >
                <h2>Sign up</h2>
                <div className="sign_profile">
                    <img src="../Images/avatar@2x.png" width="74px" height="74px"  alt="avatar"></img>
                    <div className="data">
                        <p>{username}</p>
                        <p>{surname}</p>
                        <Form.Control
                            type="password"
                            defaultValue={password}
                        />
                    </div>
                </div>
            <Form.Group controlId="validationCustom01" className="sign">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    className="sign"
                    required
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                />
                <div className="line"></div>
                <Form.Control.Feedback type="invalid">
                    Name is required.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Nice Name!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom02" className="sign">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                    required
                    type="text"
                    name="surname"
                    value={surname}
                    onChange={this.handleChange}              
                />
                <div className="line"></div>
                <Form.Control.Feedback type="invalid">
                    Surname is required.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Well done!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom03" className="sign">
                <Form.Label>Password:</Form.Label>
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
                <input type="submit" value="NEXT" />
                </div>
              <p>
                Already have account?
                <button><Link to={"/login"}>Login</Link></button>
              </p>
            </Form>
        </div>
        );
    }
}

export default withAuth(SignupForm);


