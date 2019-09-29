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
        await app.render(ctx.req,ctx.res,{
					pathname:'/a',
					query:{id}
				})
				ctx.respond=false
		})
		
    server.use(router.routes())
    
    server.listen(3000,()=>{
        console.log('sucess')
    })
})
