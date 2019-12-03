const Koa=require('koa')
const Router=require('koa-router')
const Next=require('next')
const Redis=require('ioredis')
const dev=process.env.Node_ENV!=='production'
const app=new Next({dev})
const handle=app.getRequestHandler()
const session=require('koa-session')
const RedisSessionStore=require('./server/session-store')
app.prepare().then(()=>{
    const server=new Koa()
    const router=new Router()
    const redis=new Redis()
    //加密Key
    server.keys=["Marimo's next-github app"]
    //当设置signed为true时用keys来加密cookie
    const SESSION_CONFIG={
      key:'marimo',
      store:new RedisSessionStore(redis)
    }
    server.use(session(SESSION_CONFIG,server))
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
      ctx.respond = false 
    })
    server.listen(3000,()=>{
        console.log('sucess')
    })
})
