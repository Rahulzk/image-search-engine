import { combineReducers } from 'redux'
import { imageReducer } from './ImageReducer';


const reducers = combineReducers({
    allimages : imageReducer,
})

export default reducers;