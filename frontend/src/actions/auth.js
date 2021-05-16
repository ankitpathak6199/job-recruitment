import axios from 'axios';

export const register =  (formData) =>async dispatch => {
    try{
        console.log(formData);
  const res =  await axios.post('/register',formData,{
    headers: {
    'Content-Type': 'application/json'
    }
  }
)

console.log(res.data);

dispatch({
    type : 'REGISTRATION_SUCCESSFUL',
    payload : res.data
});
    }catch(err){
        dispatch({
            type: 'REGISTER_FAIL',
            
        })
    }

}
