import React from 'react'
import initialStore from '../store'
const isServer=typeof window==='undefined'
const _NEXT_REDUX_STORE='_NEXT_REDUX_STORE'
function getOrCreateStore(initialState={}){
  if(isServer){
    return initialStore(initialState)
  }
  if(!window[_NEXT_REDUX_STORE]){
    window[_NEXT_REDUX_STORE]=initialStore(initialState)
  }
  return window[_NEXT_REDUX_STORE]
}
export default Comp=>{
  class WithReduxApp extends React.Component{
    constructor(props){
      super(props)
      this.reduxStore=getOrCreateStore()
    }
    render(){
    const {Component,pageProps,...rest}=this.props
    return(
      <Comp {...rest} pageProp={pageProps} reduxStore={this.reduxStore} Component={Component}/>
    )
  }
  }
  
  WithReduxApp.getInitialProps=async ctx=>{
    let reduxStore
    if(isServer){
      const {req={}}=ctx.ctx
      const session=req.session
      if(session&&session.userInfo){
        reduxStore=getOrCreateStore({
          user:session.userInfo
        })//只是为了获取初始值
      }else{
        reduxStore=getOrCreateStore()
      }
    }
    else{
      reduxStore=getOrCreateStore()
    }
    ctx.reduxStore=reduxStore
    let appProps = {}
    if (typeof Comp.getInitialProps === 'function') {
      appProps = await Comp.getInitialProps(ctx)
    }
    return {
      ...appProps,
      initialReduxState: reduxStore.getState(),
    }
}
return WithReduxApp
}
