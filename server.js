const Koa=require('koa')
const Router=require('koa-router')
const Next=require('next')
const Redis=require('ioredis')
const dev=process.env.Node_ENV!=='production'
const app=new Next({dev})
const handle=app.getRequestHandler()
const session=require('koa-session')
const RedisSessionStore=require('./server/session-store')
const auth=require('./server/auth')
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
    auth(server)
    router.get("/userInfo",async (ctx,next)=>{
        const user=ctx.session.userInfo
        if(user){
          ctx.body={
            success:'true',
            data:user
          }
          ctx.set('Content-Type','application/json')
        }else{
          ctx.status=401
          ctx.body={
            success:'false',
            message:'need login'
          }
        }
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
