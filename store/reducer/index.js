import * as actions from '../action'
import {combineReducers} from 'redux'
const initialState={
  count:0,
  name:'jack'
}
function userInfoReducer(state=initialState,action){
  switch (action.type){
    case actions.ADD_COUNT:
      return {...state,count:action.data}
    default:
      return state
  }
}
const allReducer =combineReducers({
  user:userInfoReducer
})
export default allReducer