import React, { useState }  from 'react';
import BackgroundImg1 from '../images/undraw_doctors_hwty.svg';
import BackgroundImg2 from '../images/undraw_medical_care_movn.svg';
import { PersonFill, LockFill } from 'react-bootstrap-icons';
import  '../App.css';

const EmptyFormData = {
    username: '',
    password: ''
};

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
      <div className="container">
          <img src={BackgroundImg1} alt="Background" className="background"/>
          <div className="formDiv">
              <h2>my health passport</h2>
              <p className="signIn">Sign In</p>
              <form onSubmit={handleSubmit}>
                  <div className="my-1">                      
                      <PersonFill/>
                        <input 
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange} 
                        /> 
                  </div>
                  <div className="my-1">
                      <LockFill/>
                        <input 
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange} 
                        />
                  </div>
                  <div className="btn-div">
                        <button type="submit" className ="sub btn">LOGIN</button>
                  </div>
               </form>
          </div>
          <img src={BackgroundImg2} alt="Background" className="backgroundII"/>
      </div>
    );
  }
  
  export default Login;
  