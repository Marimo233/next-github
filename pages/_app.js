import App,{Container}from "next/app"
import "antd/dist/antd.css"
import MyLayout from '../components/Layout'
import {Provider} from 'react-redux'
import withRedux from '../lib/withRedux'
class MyApp extends App{
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
          <Component {...pageProps}></Component>
        </MyLayout>
        </Provider>
			</Container>
		)
	}
}
export default withRedux(MyApp)