import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Proptypes from 'prop-types';
import { Component } from 'react';


 const PrivateRoute =  ({
     component : Component,...rest
 }) => (
     <Route {...rest} render = {props => localStorage.getItem('token')?
                                            ( <Component {...props}/>)
                                             : (<Redirect to = "/register"/>)
                                            }/>
 );

 

 export default PrivateRoute;
                                        