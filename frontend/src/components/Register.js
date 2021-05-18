import React ,{useState,Fragment} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import setauthtoken from '../utilities/setauthtoken';

import {Redirect} from 'react-router-dom'
//import  {register}  from '../actions/auth';
import PropTypes from 'prop-types';

import '../styles/register.css'



export const Register =({isAuthenticated}) => {
const [FormData,setFormData] = useState({
    name : '',
    username : '',
    email : '',
    password:'',
    admin : false

});
const {name,username,email,password,admin} = FormData;
    
const onChange = async e => {
        setFormData({...FormData,[e.target.name] : e.target.value})
    }
    const onSubmit =async  e => {
        e.preventDefault();
       // register(FormData);
     console.log(FormData);
     // register(Formdata);
      const body = JSON.stringify({name,username,email,password,admin});
      console.log(body);
     
      try {
         
          const res = await axios.post("http://localhost:3000/register/",body,{headers:{
             'Content-Type': 'application/json'
          }})

          console.log(res.data);
          localStorage.setItem('token',res.data.token);
          console.log(typeof(res.data.token));
        
          
          
          isAuthenticated = true;
      } catch (err) {
          console.log(err.response.data.errors);
      }
    
        
    }
    //if(isAuthenticated){
      //  <Redirect to="/home"/>
    //}
    
    return (
        <Fragment>
        <form onSubmit = {e => onSubmit(e)}>
            <label for = "name">Name</label>
            <input
             type = "text"
             placeholder = "name"
              name = "name"
              value = {name}
              onChange = {e => onChange(e)}
              
              required/><br/>
            <label for = "username">Username</label> 
            <input type = "text" 
            placeholder = "Username"
            name = "username"
            value = {username}
            onChange = {e => onChange(e)}
             required/><br/>
            <label for = "email">email</label>
            <input type = "text"
             name = "email"
             value = {email}
             onChange = {e => onChange(e)}
             required/><br/>
            <label for = "password">password</label>
            <input type = "text"
             name = "password"
             value = {password}
             onChange = {e => onChange(e)}
             required/><br/>
            
            <input type="checkbox" 
            id="admin" 
            name="admin" value="true"
            onChange = {e => onChange(e)}/>
            <label for="admin">Are you a candidate</label><br/>
            <input type = "submit" value = "submit"/>





        </form>
        </Fragment>
)
}
// Register.propTypes = {
//     isAuthenticated : PropTypes.bool,
//     register: PropTypes.func.isRequired,
        
    
// }

// const mapStateToProps = (state) => ({
//     isAuthenticated: state.auth.isAuthenticated
//   });
export default Register;
