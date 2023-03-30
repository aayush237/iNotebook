import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""})
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
          });
        const json = await response.json();
        console.log(json);
        if(json.success){
          //Save the auth token and redirect
          localStorage.setItem('token', json.authToken);
          props.showAlert("Logged in successfully", "success")
          navigate("/");
        }
        else{
          props.showAlert("Invalid credentials", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };

  return (
    <>
    <div className="mt-3">
    <h2>Log in to use iNotebook</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" onChange={onChange} value={credentials.email} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={onChange} value={credentials.password} placeholder="Password" />
      </Form.Group>
      <Button variant="primary" className="mt-2" type="submit">
        Log in
      </Button>
    </Form>
    </div>
    </>
  );
};

export default Login;