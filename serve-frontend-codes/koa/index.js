const Koa = require('koa')
const static = require('koa-static')
const proxy = require('koa-proxy')

const app = new Koa()
const port = 3000
const rooPath = '/Users/teaera/Documents/workspace/DIP-FEX/home/dist'

// app.use(async ctx => {
//   ctx.body = 'Hello World'
// })

app.use(proxy({
  host: 'https://dip-fex-assets.dip-ai.com',
  match: /^\/fex\//,
}))
app.use(static(rooPath))

app.listen(port)