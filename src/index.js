import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import signup from './components/signup'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const Routing = (
    <Router>
      <div>
        <Route exact path="/" component={signup} />
        <Route path="/home" component={App} />
      </div>
    </Router>
  )

ReactDOM.render(Routing, document.getElementById('root'));

