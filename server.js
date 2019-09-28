const Koa=require('koa')
const Router=require('koa-router')
const Next=require('next')
const dev=process.env.Node_ENV!=='production'
const app=new Next({dev})
const handle=app.getRequestHandler()
app.prepare().then(()=>{
    const server=new Koa()
    const router=new Router()
    server.use(router.routes())
    server.use(async (ctx,next)=>{
        await handle(ctx.req,ctx.res)
        ctx.respond=false
    })
    
    server.listen(3000,()=>{
        console.log('sucess')
    })
})
