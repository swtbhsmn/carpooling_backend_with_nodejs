import * as ActionTypes from './actionType';

export const signup_user = (state = { isLoading:false,errMess: null}, action) => {
    switch (action.type) {
  
      case ActionTypes.REGISTER_FAILED:
        return {...state,isLoading:false, errMess: action.payload};
  
      case ActionTypes.REGISTERED:
   
          return { ...state,isLoading:false,errMess:null,registered:action.payload};
      case ActionTypes.DO_REGISTER:
          return {...state,isLoading:true,errMess:null};
      case ActionTypes.REDIRECT:
        return{...state,isLoading:false,errMess:null,redirectTo: action.payload};
      default:
        return state;
    }
  };