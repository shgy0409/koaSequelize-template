const Router = require('koa-router')
const router = new Router()
const Models = require('../models')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/mysql', async (ctx, next) => {  
   let data2 = await Models.Department.findById(1, {
    attributes:['department'],
    include: {
      model: Models.Users,
      attributes: ['username'],
      as:'U'
    }  
  })

  ctx.body = data2
})
router.get('/mysql2', async (ctx, next) => {
 let data = await Models.Users.findAll({
   attributes: ['username', 'departmentId'],
    include: {
      model: Models.Department,
      attributes: ['department'],
       as: 'D'
    }
  }) 
  ctx.body = data
})
router.get('/mysql3', async (ctx, next) => {
  let data = await Models.Users.findAll({
    attributes: ['_id','username'],
     include: {
       model: Models.Role,
       attributes: ['roleId','roleName'],
       as:'R'   
     }
   }) 
   ctx.body = data
})

router.get('/string', async (ctx, next) => {
  await ctx.throw('200', { msg: '我错了' })
  // ctx.body = 'koa2 string'
})

router.post('/post', async (ctx, next) => {
  ctx.body = ctx.request.body.name
})
router.get('url', '/url/:id', async (ctx, next) => {
  // let name1 = Router.url('/list/:page',{ page: 2 },{ query: { order: 'desc' } })
  let name2 = await Router.url('/json', { id: 1 })
  let name = Router.url('/list/:id', { id: 1 })
  let name3 = router.url('url', { id: 3 }, { query: { limit: 1 } })
  console.log(name2)
  console.log(name)
  console.log(name3)

  ctx.response.body = `<h1>URL: ${name}!</h1>`
})
router.get('/hello/:name', async (ctx, next) => {
  var name = ctx.params.name // name是一个变量，通过ctx.params.name访问
  ctx.response.body = `<h1>Hello, ${name}!</h1>`
})

router.get('/login', async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
      <form action="/signin" method="post">
          <p>Name: <input name="name" value="koa"></p>
          <p>Password: <input name="password" type="password"></p>
          <p><input type="submit" value="Submit"></p>
      </form>`
})

router.post('/signin', async (ctx, next) => {
  var name = ctx.request.body.name || ''

  var password = ctx.request.body.password || ''
  console.log(`signin with name: ${name}, password: ${password}`)
  if (name === 'koa' && password === '12345') {
    ctx.response.body = `<h1>Welcome, ${name}!</h1>`
  } else {
    ctx.response.body = `<h1>Login failed!</h1>
      <p><a href="/">Try again</a></p>`
  }
})

module.exports = router
