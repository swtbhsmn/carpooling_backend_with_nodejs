import * as ActionTypes from './actionType';

export const user_profile = (state = { isLoading:false,errMess: null,registered:[]}, action) => {
    switch (action.type) {
  
      case ActionTypes.PROFILE_LOAD_FAILED:
        return {...state,isLoading:false, errMess: action.payload};
  
      case ActionTypes.PROFILE_LOAD_SUCCESSFULLY:

          return { ...state,isLoading:false,errMess:null,registered:action.payload};
   
      default:
        return state;
    }
  };