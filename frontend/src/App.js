
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import {Register} from './components/Register'
import {Home} from './components/Home'
function App() {
  return (
    <Provider store = {store}>
      <Router>
      <Register/>
      <Route exact path = "/home" component = {Home}/>
      </Router>
    </Provider>
    
  )
}

export default App;
