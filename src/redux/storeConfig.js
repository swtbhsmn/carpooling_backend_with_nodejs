import {createStore,  applyMiddleware ,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {login_user} from './login_redux';
import { signup_user } from './signup_redux';
import {add_ride_user_details} from './add_ride_redux';
import {book_ride_user_details} from './book_ride_user';
import {ride_user_history } from './user_ride_history';
const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            fetchLoginUser:login_user,
            fetchSignupUser:signup_user,
            addRideUser:add_ride_user_details,
            bookRideUser:book_ride_user_details,
            rideUserHistory:ride_user_history 
        
        }),
       
        applyMiddleware(thunk,logger)
    );

    return store;
}

export default ConfigureStore;