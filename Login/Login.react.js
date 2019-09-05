import React from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
          };
    }
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
    
      handleSubmit = event => {
        event.preventDefault();
      }

    render() {
        return (
            <div className="Login">
                <header>
                    <h1>Sign in to My Account</h1>
                </header>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="medium">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="medium">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            variant="dark"
            disabled={!this.validateForm()}
            type="submit"
            >Sign in
          </Button>
        </form>
      </div>
        );
    }
}

export default Login;