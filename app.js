/* (async function () {
})() */
  const Koa = require('koa')
  const chalk = require('chalk')
  const path = require('path')
  const bodyparser = require('koa-bodyparser')
  const render = require('koa-art-template')
  const staticCache = require('koa-static-cache')
  // 加载路由文件
  const user = require('./routes/user')
  const index = require('./routes/index')

  // 创建服务
  let app = new Koa()

  // 处理静态文件,该中间件可以配置多次，以完成不同静态文件目录的映射
  app.use(
    staticCache(__dirname + '/public', {
      prefix: '/xxx' // 如果请求以/xxx开头，则作为静态资源处理
    })
  )
  // 设置 art-template 模板
  render(app, {
    root: path.join(__dirname, 'view'), // 模板文件存放路径
    extname: '.html', // 设置模板文件后缀为html
    // debug 为false ,则每次请求，压缩模板文件及JS，包括混淆，但静态数据不会实时更新（不每次都读文件）
    // debug 为true ,则每次请求，原样传送文件
    debug: process.env.NODE_ENV !== 'production',
    // 是否开启对模板输出语句自动编码功能。为 false 则关闭编码输出功能
    // escape 可以防范 XSS 攻击;该功能为true，动态数据可以支持html标签
    escape: true
  })
  // 处理post的body数据
  app.use(bodyparser())

  // 错误页面反馈（优雅的错误处理），，并反馈前端错误页面.该中间件在路由中间件之上
  app.use(async (ctx, next) => {
    try {
      await next()
    } catch (error) {
      ctx.body = '粗错了:' + error.msg
      // 手动释放error事件
      ctx.app.emit('error', error, ctx)
    }
  })
  // 路由挂载在app上
  // 其中allowedMethods()方法是优化状态码，405 请求URL有，但方法没有实现；501服务器不支持该请求方式。
  app.use(user.routes(), user.allowedMethods())
  app.use(index.routes(), index.allowedMethods())

  // 错误日志处理，如果出现'error'错误，系统记录错误信息
  app.on('error', (err, ctx) => {
    if (err) {
      console.log('系统错误---' + err.msg)
    }
  })
  app.listen(9999, () => {
    console.log(
      chalk.yellow('服务已经启动，服务地址：   http://localhost:9999/')
    )
  })

