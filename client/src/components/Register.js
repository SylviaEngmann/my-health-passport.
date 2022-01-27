import React, { useState }  from 'react';
import LoginImage from '../images/meds.svg';
import {Row, Col} from 'react-bootstrap';
import Logo from '../components/Logo';
import  '../App.css';

const EmptyFormData = {
    firstname: '',
    lastname: '',
    dateofbirth: '01-01-2000',
    username: '',
    password: ''
};

const registerButton = {
  backgroundColor: "#117baa",
  color: "white"
}

function Register(props) {

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
        console.log(formData)
        setFormData(EmptyFormData);
      }

    return (
        <div>
            <Logo />
            <div className="loginPage">
            <Row>
              <Col>
                <img src={LoginImage} alt="LoginImage" className="loginImage"/>
              </Col>

              <Col>
                <p className="signIn">Sign Up</p>
                  <form onSubmit={handleSubmit}>
                            <input 
                                type="text"
                                name="firstname"
                                placeholder="First Name"
                                value={formData.firstname}
                                onChange={handleChange} 
                            />  
                            <input 
                                type="text"
                                name="lastname"
                                placeholder="Last Name"
                                value={formData.lastname}
                                onChange={handleChange} 
                            />
                            <input 
                                type="date"
                                value={formData.dateofbirth}
                                onChange={handleChange}
                                //onChange={(event) => setFormData({dob: event.target.value})}
                            />
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
                            <button type="submit" style={registerButton}>SIGN UP</button>
                            <p>Already have an account? <a href="/login">Login</a></p>
                      </div>
                  </form>
              </Col>
          </Row>
        </div>
        </div>
    
          
    );
  }
  
  export default Register;
  