const withCss=require("@zeit/next-css")
const withLess=require("@zeit/next-less")
const config=require('./config')
if(typeof require !=="undefined"){
    require.extensions[".css"]=file=>{}
}
const GITHUB_OAUTH_URL='https://github.com/login/oauth/authorize'
const scope='user'
module.exports= withLess(withCss({
    publicRuntimeConfig:{
        GITHUB_OAUTH_URL,
        OAUTH_URL:`${GITHUB_OAUTH_URL}?client_id=${config.github.client_id}&scpoe=${scope}`
    }
}))