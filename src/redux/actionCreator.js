import * as ActionTypes from './actionType';
import { baselogin, basesignup, baseUrl } from '../shared/baseUrl';
import fetch from 'cross-fetch';


export const loginUser = (user, pass) => (dispatch) => {


    dispatch(doLoading(true));
    return fetch(baselogin, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
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
        .then(response => {
            dispatch(loginUserx(response));

            window.localStorage.setItem('user', JSON.stringify(response));
            dispatch(redirect('/dashboard'));

        })
        .catch(error => dispatch(loginFailed(error.message)));
}

export const loginUserx = (user) => ({
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

export const redirect = (re_direct) => ({
    type: ActionTypes.REDIRECT,
    payload: re_direct
});


export const signupUser = (formData) => dispatch => {

    dispatch(doLoading_register(true));
    return fetch(basesignup, {
        method: "POST",
        body: formData,
        headers: { "mimeType": "multipart/form-data" }

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
            }
        )
        .then(response => response.json())
        .then(response => {
            dispatch(registerd(response));
            dispatch(redirect('/dashboard'));

        })
        .catch(error => dispatch(signupFailed(error.message)));
}

export const doLoading_register = () => ({
    type: ActionTypes.DO_REGISTER
});

export const signupFailed = (errmess) => ({
    type: ActionTypes.REGISTER_FAILED,
    payload: errmess
})

export const registerd = (response) => ({
    type: ActionTypes.REGISTERED,
    payload: response
})


export const user_profile = () => dispatch => {

    const userToken = JSON.parse(window.localStorage.getItem("user"));

    return fetch(baseUrl + "/users/userprofile", {

        method: "GET",
        headers: { 'Content-Type': 'application/json', 'Authorization':`Bearer ${userToken.token}`},

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
        .then(response => {

            dispatch(userProfile(response));
           
        })
        .catch(error => dispatch(userProfileFailed(error.message)));

}


export const userProfile = (response) => ({
    type: ActionTypes.PROFILE_LOAD_SUCCESSFULLY,
    payload: response
})

export const userProfileFailed = (response) => ({
    type: ActionTypes.PROFILE_LOAD_FAILED,
    payload: response
})
