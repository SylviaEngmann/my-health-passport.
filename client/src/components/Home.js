import React from 'react';
import HomeImage from '../images/workout.svg';
import {Row, Col} from 'react-bootstrap';
import  '../App.css';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({forceRefresh:true}); 

const loginButton = {
    backgroundColor: "#117baa",
    color: "white"
}

const signupButton = {
    backgroundColor: "#f7f5f5",
    color: "#117baa"
}


function Home() {

    function gotologin(){
        history.push('/login');
    }

    function gotosignup(){
        history.push('/signup');
    }
    return (
        <div style={{marginTop: "5rem"}}>
            <Row>
                <Col style={{marginTop: "5rem"}}>
                    <h1 style={{textAlign: "center"}}>my health passport.</h1>
                    <p style={{textAlign: "center"}}>Have access to your healthcare data,
                        from different health points</p>
                    
                    <ul className="buttons-div">
                        <li>
                            <button style={loginButton} onClick={gotologin}>LOGIN</button>
                        </li>
                        <li>
                            <button style={signupButton} onClick={gotosignup}>SIGN UP</button>
                        </li>
                    </ul>
                            
                </Col>
                <Col>
                    <img src={HomeImage} alt="HomeImage" className="homeImage"/>
                </Col>
            </Row>
        </div>
      
    );
  }
  
  export default Home;
  