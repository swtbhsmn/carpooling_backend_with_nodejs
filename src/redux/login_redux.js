import * as ActionTypes from './actionType';

export const login_user = (state = { isLoading:false,errMess: null, login_user:[]}, action) => {
    switch (action.type) {
  
      case ActionTypes.LOGIN_USER_FAILED:
        return {...state,isLoading:false, errMess: action.payload};
  
      case ActionTypes.LOGIN_USER:
          var user = action.payload;
          return { ...state,isLoading:false,errMess:null,login_user:state.login_user.concat(user)};
      case ActionTypes.DO_LOADING_LOGIN:
          return {...state,isLoading:true,errMess:null};
      default:
        return state;
    }
  };