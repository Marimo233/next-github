import * as actions from '../action'
import {combineReducers} from 'redux'

function userInfoReducer(state={},action){
  switch (action.type){
    case actions.LOGOUT:
      return {}
    default:
      return state
  }
}
const allReducer =combineReducers({
  user:userInfoReducer,
})
export default allReducer