import App,{Container}from "next/app"
import Router from 'next/router'
import Link from 'next/link'
import "antd/dist/antd.css"
import MyLayout from '../components/Layout'
import PageLoading from '../components/PageLoading'
import {Provider} from 'react-redux'
import withRedux from '../lib/withRedux'
class MyApp extends App{
	constructor(){
    super()
    this.state={
      loading:false
    }
  }
  showLoading=()=>{
    console.log('a')
    this.setState({
      loading:true
    })
  }
  hideLoading=()=>{
    this.setState({
      loading:false
    })
  }
  componentDidMount(){
    Router.events.on('routeChangeStart',this.showLoading)
    Router.events.on('routeChangeComplete',this.hideLoading)
    Router.events.on('routeChangeError',this.hideLoading)
  }
  componentWillUnmount(){
    Router.events.off('routeChangeStart',this.showLoading)
    Router.events.off('routeChangeComplete',this.hideLoading)
    Router.events.off('routeChangeError',this.hideLoading)
  }
	static async getInitialProps(ctx){
    const { Component } = ctx
			let pageProps={}
			if(Component.getInitialProps){
					pageProps=await Component.getInitialProps(ctx)
			}
			return {pageProps}
	}
	render(){
    const {Component,pageProps,reduxStore}=this.props
		return(
      <Container>
      <Provider store={reduxStore}>
        <MyLayout>
          {
            this.state.loading&&<PageLoading/>
          }
          <Link href='/'>index</Link>
          <Link href='/detail'>detail</Link>
          <Component {...pageProps}></Component>
        </MyLayout>
        </Provider>
			</Container>
		)
	}
}
export default withRedux(MyApp)