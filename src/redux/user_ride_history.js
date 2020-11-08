import * as ActionTypes from './actionType';

export const ride_user_history = (state = { isLoading:false,errMess: null,rideHistory:[]}, action) => {
    switch (action.type) {
  
      case ActionTypes.RIDE_HISTORY_ADDED_FAILED:
        return {...state,isLoading:false, errMess: action.payload};
  
      case ActionTypes.RIDE_HISTORY_ADDED:
   
          return { ...state,isLoading:false,errMess:null,rideHistory:action.payload};

      default:
        return state;
    }
  };