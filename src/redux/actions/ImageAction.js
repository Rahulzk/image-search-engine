import { ActionTypes } from "../constant/actionType";

export const setImages = (images) =>{
    return {
        type : ActionTypes.SET_IMAGES,
        payload : images
    }
}