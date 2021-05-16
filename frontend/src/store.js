import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import rootReducer from './reducers/rootreducer';
import setauthtoken from './utilities/setauthtoken';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

let currentstate = store.getState();

store.subscribe(()=>{
    let previousstate = currentstate;
    currentstate = store.getState();
    if(previousstate.auth.token !== currentstate.auth.token){
        const token = currentstate.auth.token;
        setauthtoken(token);
        
    }
    

})
export default store;