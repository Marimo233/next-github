import {createStore} from 'redux'

import allReducer from './reducer'
export default function initialStore(state){
  const store=createStore(
    allReducer,
    state
    )
  return store
}