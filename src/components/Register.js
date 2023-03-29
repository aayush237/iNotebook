import React, {useState} from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom'

const Register = (props) => {

  const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""})
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
        e.preventDefault();
        const {name, email, password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({name, email, password})
          });
        const json = await response.json();
        console.log(json);
        if(json.success){
          //Save the auth token and redirect
          localStorage.setItem('token', json.authtoken);
          navigate("/");
          props.showAlert("Account created successfully", "success")
        }
        else{
          props.showAlert("Invalid credentials", "danger")
        }    
      }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Enter your name</Form.Label>
        <Form.Control type="name" name="name" onChange={onChange} placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" onChange={onChange} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={onChange}  placeholder="Password" required minLength={8}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCPassword">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control type="password" name="password" onChange={onChange}  placeholder="Re-enter your password" required minLength={8} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  )
}

export default Register