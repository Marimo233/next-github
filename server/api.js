const api =require('../lib/api')
module.exports=(server)=>{
  server.use(async (ctx,next)=>{
    const url=ctx.url
    if(url.startsWith('/github/')){
      const method=ctx.method
        try {
          const result=await api.request({
            method,
            url:url.replace('/github/','/'),
            data:{}
          },ctx.req,ctx.res)
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