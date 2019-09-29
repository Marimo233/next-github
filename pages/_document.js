import Document ,{Html,Head,Main,NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'
export default class Mydocument extends Document{
    static async getInitialProps (ctx){
      
      const sheet=new ServerStyleSheet()
      const originalREnderPage=ctx.renderPage
      try {
         ctx.renderPage=()=>{
					originalREnderPage({
						enhanceApp:App=>props=>sheet.collectStyles(<App {...props} />)
					})
				 }
				 let  initProps=await Document.getInitialProps(ctx)
				 return {
					...initProps,
					styles:(
						<>{initProps.styles}{sheet.getStyleElement()}</>
					)
      }
      } catch (error) {
				sheet.seal()
      }
      
    }
    render(){
        return <Html>
            <Head></Head>
            <bod>
                <Main/>
                <NextScript/>
            </bod>
        </Html>
    }
}