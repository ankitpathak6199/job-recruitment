
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import {Register} from './components/Register'
import {Home} from './components/Home'
import PrivateRoute from './components/routes/privateroute';
function App() {
  return (
    
      <Router>
      <Register/>
      <PrivateRoute exact path = "/home" component = {Home}/>
      </Router>
    
    
  )
}

export default App;
