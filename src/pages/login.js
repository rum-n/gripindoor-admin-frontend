import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../assets/grip1.png';
import './styles.scss';

function Login() {
  return (
      <React.Fragment>
          <div className='login-header'>
              <img src={logo}/>
              <h2>Climbing Gym Management</h2>
          </div>
          
        <div className='content login-box'>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="outline-dark" type="submit">
                Submit
            </Button>
            </Form>        
        </div> 
    </React.Fragment>
  );
}

export default Login;