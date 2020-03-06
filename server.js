const Koa=require('koa')
const Router=require('koa-router')
const Next=require('next')
const Redis=require('ioredis')
const koaBody=require('koa-body')
const dev=process.env.Node_ENV!=='production'
const app=new Next({dev})
const handle=app.getRequestHandler()
const session=require('koa-session')
const RedisSessionStore=require('./server/session-store')
const auth=require('./server/auth')
const api=require('./server/api')
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
    server.use(koaBody())
    server.use(session(SESSION_CONFIG,server))
    //配置处理githubOAuth登录
    auth(server)
    //github接口代理
    api(server)
    //获取信息
    router.get("/api/user/info",async (ctx,next)=>{
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
    //登出
    router.post('/api/user/logout',async(ctx,next)=>{
      ctx.session=null
      ctx.body={
        success:true,
        message:'logout success'
      }
    })
		
    server.use(router.routes())
    server.use(async (ctx, next) => {
      ctx.req.session=ctx.session
      await handle(ctx.req, ctx.res)
      ctx.respond = false 
    })
    server.listen(3000,()=>{
        console.log('success')
    })
})
