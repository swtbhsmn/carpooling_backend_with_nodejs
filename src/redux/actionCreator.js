import * as ActionTypes from './actionType';
import {baselogin} from '../shared/baseUrl';
import fetch from 'cross-fetch';
export const loginUser = (user, pass) => (dispatch) => {


    dispatch(doLoading(true));
    return fetch(baselogin, {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            username: user,
            password: pass,
          })
      ,
    
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            throw error;
      })
      .then(response => response.json())
      .then(response => {dispatch(loginUserx(response));
 
        window.localStorage.setItem('user',JSON.stringify(response));
   
       
    })
      .catch(error =>dispatch(loginFailed(error.message)));
}

export const loginUserx= (user) => ({
    type: ActionTypes.LOGIN_USER,
    payload: user
});
export const loginFailed = (errmess) => ({
    type: ActionTypes.LOGIN_USER_FAILED,
    payload: errmess
});

export const doLoading = () => ({
    type: ActionTypes.DO_LOADING_LOGIN
});

export const redirect=(re_direct)=>({
    type:ActionTypes.REDIRECT,
    payload:re_direct
})