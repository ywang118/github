### koa 使用
---
`ctx`上面可以获取很多属性:
 - `ctx.path`
 - `ctx.method`
 - `ctx.query`
 >属性介绍： [Koa - next generation web framework for node.js](https://koajs.com/#context)
```js
const server = new Koa()
const next = require('next')
server.use(async (ctx,next)=> { 
        const path = ctx.path
        const method = ctx.method
        ctx.body = '<span>Koa Render </span>'
        await next()
    })
    server.listen(3000,()=>{
        console.log('koa server listening on 3000')
    })

```
### koa router
安装
`npm install koa-router`

`router`具有的属性：`:id`
```js
const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const server = new Koa()
    //创建router对象
    const router = new Router()

      router.get('/test/:id',(ctx,next)=> {
        ctx.params.id
        //返回内容用 ctx.body
        ctx.body = `<p>request /test ${ctx.params.id}</p>`
    })
       //返回json的内容
      //ctx.body = {success: true}
      // ctx.set('
   //    content-Type,'application/json'')
    server.use(async (ctx,next)=> { 
      
        await next()
    })
    server.use(router.routes())
    server.listen(3000,()=>{
        console.log('koa server listening on 3000')
    })

```
### req, res, ctx.request, ctx.response
>`ctx.request`: a Koa Request object
>`ctx.reqsponse`: a Koa RespondseObject
[koa/request.js at master · koajs/koa · GitHub](https://github.com/koajs/koa/blob/master/lib/request.js)


>`ctx.req`:Node's request object
>`ctx.res`:Node's response object

```js
server.use(async (ctx,next)=> {
//next 兼容nodejs原生对象
await handle(ctx.req, ctx.res)
ctx.respond = false
})
```
