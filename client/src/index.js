import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
const history = createHistory({forceRefresh:true});   

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter history={history}>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
