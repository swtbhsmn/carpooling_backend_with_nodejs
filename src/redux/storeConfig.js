import {createStore,  applyMiddleware ,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {login_user} from './login_redux';
const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            fetchLoginUser:login_user
        }),
       
        applyMiddleware(thunk,logger)
    );

    return store;
}

export default ConfigureStore;