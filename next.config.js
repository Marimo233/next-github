const withCss=require("@zeit/next-css")
const withLess=require("@zeit/next-less")
const config=require('./config')
if(typeof require !=="undefined"){
    require.extensions[".css"]=file=>{}
}
module.exports= withLess(withCss({
    publicRuntimeConfig:{
        GITHUB_OAUTH_URL:config.GITHUB_OAUTH_URL,
        OAUTH_URL:config.OAUTH_URL
    }
}))