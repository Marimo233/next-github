import * as actions from '../action'

const initalState={
  count:0,
  name:'jack'
}

export default function reducer(state=initalState,action){
  switch (action.type){
    case actions.ADD_COUNT:
      return {...state,count:action.data}
    default:
      return state
  }
}