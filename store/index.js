import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import allReducer from './reducer'

export default function initialStore(state){
  console.log(state)
  let store=createStore(
    allReducer,
    state,
    composeWithDevTools(applyMiddleware(thunk))
    )
  return store
}