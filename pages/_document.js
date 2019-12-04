import Document ,{Html,Head,Main,NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'
export default class Mydocument extends Document{
    static async getInitialProps (ctx){     
      const sheet=new ServerStyleSheet()
      const originalRenderPage=ctx.renderPage
      try {
         ctx.renderPage=()=>
					originalRenderPage({
						enhanceApp:App=>props=>sheet.collectStyles(<App {...props} />)
					})
				 
				 let  initProps=await Document.getInitialProps(ctx)
				 return {
					...initProps,
					styles:(
						<>{initProps.styles}{sheet.getStyleElement()}</>
					)
      }
      } finally {
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