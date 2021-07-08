import React, { useState }  from 'react';
import LoginImage from '../images/meds.svg';
import Logo from "../components/Logo";
import {Row, Col} from 'react-bootstrap';

import  '../App.css';

const EmptyFormData = {
    username: '',
    password: ''
};

const loginButton = {
  backgroundColor: "#117baa",
  color: "white"
}

function Login(props) {

    const [formData, setFormData] = useState(EmptyFormData);

    const handleChange = (event) => {
        const { name, value } = event.target;

        let newFormData = {...formData};  
        newFormData[name] = value;  
        setFormData(data => newFormData);  
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        props.submitCb(formData);
        setFormData(EmptyFormData);
      }

    return (
      <div>
        <Logo/>

        <div className="loginPage">

            <Row>
              <Col>
                <img src={LoginImage} alt="LoginImage" className="loginImage"/>
              </Col>

              <Col>
                <p className="signIn">Sign In</p>
                  <form onSubmit={handleSubmit}>                  
                            <input 
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleChange} 
                            /> 
                            <input 
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange} 
                            />
                      <div className="btn-div">
                            <button type="submit" style={loginButton}>LOGIN</button>
                            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                      </div>
                  </form>
              </Col>
          </Row>
        </div>
      </div>
        
          
    );
  }
  
  export default Login;
  