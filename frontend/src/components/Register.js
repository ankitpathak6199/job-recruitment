import React ,{useState,Fragment} from 'react';
import { connect } from 'react-redux';


import {Redirect} from 'react-router-dom'
import  {register}  from '../actions/auth';
import PropTypes from 'prop-types';

import '../styles/register.css'



export const Register =({isAuthenticated}) => {
const [FormData,setFormData] = useState({
    Name : '',
    username : '',
    email : '',
    password:'',
    admin : false

});
const {Name,username,email,password} = FormData;
    
const onChange = async e => {
        setFormData({...FormData,[e.target.name] : e.target.value})
    }
    const onSubmit =async  e => {
        e.preventDefault();
       // register(FormData);
     console.log(FormData);
     console.log(register());
    register(FormData);
    
        
    }
    if(isAuthenticated){
        <Redirect to="/home"/>
    }
    
    return (
        <Fragment>
        <form onSubmit = {e => onSubmit(e)}>
            <label for = "Name">Name</label>
            <input
             type = "text"
             placeholder = "Name"
              name = "Name"
              value = {Name}
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
Register.propTypes = {
    isAuthenticated : PropTypes.bool,
    register: PropTypes.func.isRequired,
        
    
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  });
export default connect(mapStateToProps,{register})(Register);
