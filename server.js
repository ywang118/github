const Koa = require('koa')
const next = require('next')

//初始化nextjs
// 判断是否处在dev状态
const dev = process.env.NODE_ENV !== 'production'
const app =next({ dev})
const handle = app.getRequestHandler()
const Router = require('koa-router')
// app.prepare().then(()=> {
    const server = new Koa()
    const router = new Router()

    router.get('/test',(ctx,next)=> {
        ctx.body = '<p>request /test </p>'
    })
    server.use(async (ctx,next)=> {
        ctx.body = '<span>Koa Render </span>'
        await next()
    })
    server.use(router.routes())

//     server.use(async (ctx,next)=> {
//         await handle(ctx.req, ctx.res)
//         ctx.respond = false

//     })
    server.listen(3000,()=>{
        console.log('koa server listening on 3000')
    })
// })
