const Koa = require('koa')
const Router = require('@koa/router')
const fs = require('fs')

const app = new Koa()
const router = new Router()

router.get('/',async ctx => {
    ctx.type = 'text/html;charset = utf-8'
    ctx.body = fs.readFileSync('./dist/index.html')
})

app.use(router.routes())

app.listen(8888,() => {
    console.log('success');
})