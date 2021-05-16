const initialstate = {
    token : localStorage.getItem('token'),
    isAuthenticated : false,
    loading : true,
    user: null

}
function registerReducer(state = initialstate,action){
    switch(action.type){
        case 'REGISTRATION_SUCCESSFUL':
            return{
                ...state,
                isAuthenticated:true,
                loading:false,
                user:action.payload
            }
        case 'REGISTER_FAIL' :
            return {
                ...state,
                
            }
           default :
           return state;
    }
}
export default registerReducer;