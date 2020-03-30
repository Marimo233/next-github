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
            //对于在客户端发起的请求，ctx.req不存在，因此要传入ctx
          },ctx,ctx)
          if(result.status===200){
            ctx.body={
              success:true,
              data:result.data,
              code:200
            }
            ctx.set('Content-Type','application/json')
          }else{
            ctx.code=result.status
            ctx.body={
              success:false,
              data:[]
            }
          }
        } catch (error) {
          console.log(error)
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