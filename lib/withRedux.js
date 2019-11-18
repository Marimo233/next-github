import React from 'react'
import initialStore from '../store'
const isServer=typeof window==='undefined'
const _NEXT_REDUX_STORE='_NEXT_REDUX_STORE'
function getOrCreateStore(){
  if(isServer){
    return initialStore()
  }
  if(!window[_NEXT_REDUX_STORE]){
    window[_NEXT_REDUX_STORE]=initialStore
  }
  return window[_NEXT_REDUX_STORE]
}
export default Comp=>{
  class withReduxApp extends React.Component{
    constructor(props){
      super(props)
      this.reduxStore=getOrCreateStore()
    }
    render(){
    const {Component,pageProps,...rest}=this.props
    return(
      <Comp {...rest} pageProp={pageProps} reduxStore={this.reduxStore}/>
    )
  }
  }
  
  withReduxApp.getInitialProps=async ctx=>{
    const reduxStore=getOrCreateStore()//只是为了获取初始值
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
return withReduxApp
}
