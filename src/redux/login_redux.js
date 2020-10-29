import * as ActionTypes from './actionType';

export const login_user = (state = { isLoading:false,errMess: null}, action) => {
    switch (action.type) {
  
      case ActionTypes.LOGIN_USER_FAILED:
        return {...state,isLoading:false, errMess: action.payload};
  
      case ActionTypes.LOGIN_USER:
   
          return { ...state,isLoading:false,errMess:null};
      case ActionTypes.DO_LOADING_LOGIN:
          return {...state,isLoading:true,errMess:null};
      case ActionTypes.REDIRECT:
        return{...state,isLoading:false,errMess:null,redirectTo: action.payload};
      default:
        return state;
    }
  };