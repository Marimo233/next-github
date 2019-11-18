const Koa=require('koa')
const Router=require('koa-router')
const Next=require('next')
const Redis=require('ioredis')
const dev=process.env.Node_ENV!=='production'
const app=new Next({dev})
const handle=app.getRequestHandler()
app.prepare().then(()=>{
    const server=new Koa()
    const router=new Router()
    // const redis=new Redis()
    router.get("/a/:id",async (ctx,next)=>{
			const id=ctx.params.id
        await handle(ctx.req,ctx.res,{
					pathname:'/a',
					query:{id}
				})
				
		})
		
    server.use(router.routes())
    server.use(async (ctx, next) => {
      await handle(ctx.req, ctx.res)
      // ctx.respond = false 暂时注释掉
    })
    server.listen(3000,()=>{
        console.log('sucess')
    })
})
