import React from 'react';
import {Container} from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import './App.css';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({forceRefresh:true});   

function App() {

  async function login(input) {
    let options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input)
    };

    try {
      let response = await fetch('http://localhost:5000/login', options);
      if (response.ok) {
        let user = await response.json();
        localStorage.setItem('user', JSON.stringify(user));
        history.push('/dashboard');
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  }



  return (
    <Container fluid>
        <Switch>
          <Route path="/" exact>
              <Home />
          </Route>
          <Route path="/login">
              < Login submitCb={login}/>
          </Route>
          <Route path="/signup">
              < Register/>
          </Route>
            <Route path="/dashboard">
              < Dashboard />
            </Route>
        </Switch>
    </Container>
  );
}

export default App;
