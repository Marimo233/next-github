const axios=require('axios')
const config=require('../config')
const {client_id,client_secret,request_token_url}=config.github
module.exports=(server)=>{
  //处理OAuth认证后返回登陆信息
  server.use(async (ctx,next)=>{
    if(ctx.path==='/auth'){
      const code=ctx.query.code
      if(!code){
        ctx.body={
          success:'false',
          message:'Code not exist'
        }
        return
      }
      const result=await axios({
        method:'POST',
        url:request_token_url,
        data:{
          client_id,
          client_secret,
          code
        },
        headers:{
          Accept:'application/json'
        }
      })
      if(result.status===200&&(result.data&&!result.data.error)){
        ctx.session.githubAuth=result.data
        const {access_token,token_type}=result.data
        const userInfoResp=await axios({
          method:'GET',
          url:'https://api.github.com/user',
          headers:{
            'Authorization':`${token_type} ${access_token}`
          }
        })
        ctx.session.userInfo=userInfoResp.data
        ctx.redirect((ctx.session&&ctx.session.urlBeforeLogin)||'/')
        ctx.session.urlBeforeLogin=''
      }else{
        const errorMessage=result.data&&result.data.error||''
        ctx.body={
          success:'false',
          message:errorMessage
        }
      }
    }else{
      await next()
    }
  })
  //处理客户端请求登录
  server.use(async (ctx,next)=>{
    if(ctx.path==='/prepare-auth'&&ctx.method==='GET'){
      const {url}=ctx.query
      if(url){
        ctx.session.urlBeforeLogin=url
        ctx.redirect(config.OAUTH_URL)
      }else{
        await next()
      }
    }else{
      await next()
    }
  })
}