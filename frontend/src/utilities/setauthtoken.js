import axios from 'axios';

const setauthtoken =  token => {
    if(token){
    axios.defaults.headers.common['x-auth-token'] = token;
    localStorage.setItem('token',token);
    }
    else{
        delete axios.defaults.headers.common['x-auth-token'];
        localStorage.removeItem('token');
    }

}
export default setauthtoken;

/*const ssetauthtoken = (token) => {
    if(token){
        axios.defaults.headers.common['x-auth-token'] = token;
        localstorage.setItem('token',token);

    }
    else{
        delete axios.defaults.headers.common['x-auth-token'] = token;
        localstorage.removeItem('token');
    }
}*/
