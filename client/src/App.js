import React, {  useState }  from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import './App.css';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({forceRefresh:true});   

function App() {

  let [loggedIn, setUser] = useState();

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
        setUser(user);
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
    <div className="App">
      <Router history={history}>
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
