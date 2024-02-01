import React from 'react';
import './App.css';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
