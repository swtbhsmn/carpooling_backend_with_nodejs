import * as ActionTypes from './actionType';

export const add_ride_user_details = (state = { isLoading:false,errMess: null}, action) => {
    switch (action.type) {
  
      case ActionTypes.ADD_RIDE_UNSUCCESSFULL:
        return {...state,isLoading:false, errMess: action.payload};
  
      case ActionTypes.ADD_RIDE_SUCCESSFULL:
   
          return { ...state,isLoading:false,errMess:null,registered:action.payload};
      case ActionTypes.DOING_ADD_RIDE:
          return {...state,isLoading:true,errMess:null};
      default:
        return state;
    }
  };