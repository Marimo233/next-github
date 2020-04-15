const api =require('../lib/api')
module.exports=(server)=>{
  server.use(async (ctx,next)=>{
    const { path, method} = ctx
    if(path.startsWith('/github/')){
        try {
          const result= await api.request({
            method,
            url:ctx.url.replace('/github/','/'),
            data:ctx.request.body
            //对于在客户端发起的请求，ctx.req.session还不存在，因此要传入ctx
          },ctx,ctx)
          if(result.status===200){
            ctx.status = result.status 
            ctx.body = result.data
            ctx.set('Content-Type','application/json')
          }else{
            ctx.code=result.status
            ctx.body={
              success:false,
              data:[]
            }
          }
        } catch (error) {
          console.log('server error',error)
          ctx.body={
            success:false,
            message:error,
            data:[]
          }
        }
    }else{
      await next()
    }
  })
}