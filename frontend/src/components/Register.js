import React ,{useState} from 'react';
import ReactDOM from 'react-dom';

export const Register =() => {
const [FormData,setFormData] = useState({
    Name : '',
    username : '',
    email : '',
    password:'',
    admin : false

});
const {Name,username,email,password,admin} = FormData;

    const onChange = e => {
        setFormData({...FormData,[e.target.name] : e.target.value})
    }
    const onSubmit = e => {
        e.preventDefault();
        console.log(FormData);
    }
    return (
        <div>
        <form onSubmit = {e => onSubmit(e)}>
            <label for = "Name">Name</label>
            <input
             type = "text"
             placeholder = "Name"
              name = "Name"
              value = {Name}
              onChange = {e => onChange(e)}
              
              required/>
            <label for = "username">Username</label> 
            <input type = "text" 
            placeholder = "Username"
            name = "username"
            value = {username}
            onChange = {e => onChange(e)}
             required/>
            <label for = "email">email</label>
            <input type = "text"
             name = "email"
             value = {email}
             onChange = {e => onChange(e)}
             required/>
            <label for = "password">password</label>
            <input type = "text"
             name = "password"
             value = {password}
             onChange = {e => onChange(e)}
             required/>
            <label for="admin">company</label>
            <input type="radio" 
            id="admin" 
            name="admin" value={admin}
            onChange = {e => onChange(e)}/>
                <input type = "submit" value = "submit"/>





        </form>
        </div>
)
}
export default Register;
