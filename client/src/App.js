import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import './App.css';

const server = "localhost:5000";

function App() {

  const login = () => {
    console.log("button clicked");
    // fetch(`${server}/login`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     // body: JSON.stringify({ input: input }) 
    // })
}

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            < Login submitCb={login}/>
          </Route>
          <Route path="/dashboard">
            < Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
