import * as ActionTypes from './actionType';

export const book_ride_user_details = (state = { isLoading:false,errMess: null,bookedRide:[]}, action) => {
    switch (action.type) {
  
      case ActionTypes.BOOK_RIDE_FAILED:
        return {...state,isLoading:false, errMess: action.payload};
  
      case ActionTypes.BOOKED_RIDE:
   
          return { ...state,isLoading:false,errMess:null,bookedRide:action.payload};
      case ActionTypes.SEARCH_BOOK_RIDE:
          return {...state,isLoading:true,errMess:null};
      default:
        return state;
    }
  };