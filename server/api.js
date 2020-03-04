const axios=require('axios')

const github_base_url='https://api.github.com'

module.exports=(server)=>{
  server.use(async (ctx,next)=>{
    const url=ctx.url
    if(url.startsWith('/github/')){
        const githubUrl=`${github_base_url}${url.replace('/github/','/')}`
        const githubAuth=ctx.session.githubAuth
        try {
          const token = githubAuth&&githubAuth.access_token
          let headers={}
          if(token){
            headers['Authorization']=`${githubAuth.token_type} ${token}`
          }
          const result=await axios({
            method:'GET',
            url:githubUrl,
            headers
          })
          if(result.status===200){
            ctx.body={
              suuccess:true,
              data:result.data,
              code:200
            }
            ctx.set('Content-Type','application/json')
          }else{
            ctx.code=result.status
            ctx.body={
              suuccess:false
            }
            console.log(result)
          }
        } catch (error) {
          ctx.body={
            suuccess:false,
            message:error
          }
        }
    }else{
      await next()
    }
  })
}