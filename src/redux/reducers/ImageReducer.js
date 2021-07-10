import { ActionTypes } from "../constant/actionType";

const initialState = {
    images : []
}


export const imageReducer = (state = initialState,{ type, payload}) =>{
     switch( type ) {
          case ActionTypes.SET_IMAGES : return {...state,images:payload};
          default : return state
     }
}