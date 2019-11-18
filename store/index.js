import {createStore} from 'redux'

import reducer from './reducer'

export default function initialStore(){
  const store=createStore(reducer)
  return store
}