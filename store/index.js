import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import allReducer from './reducer'
export default function initialStore(state){
  const store=createStore(
    allReducer,
    state,
    composeWithDevTools()
    )
  return store
}