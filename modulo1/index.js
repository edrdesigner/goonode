const express = require('express')
const nunjucks = require('nunjucks')

// http
//   .createServer((req, res) => {
//     return res.end("Hello Wold");
//   })
//   .listen(3000);

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.set('view engine', 'njk')

app.use(express.urlencoded({ extended: false })) // para uso de form post

const users = ['Diego', 'RObson', 'Eduardo']

app.get('/', (req, res) => {
  return res.render('list', {
    users
  })
})

app.get('/new', (req, res) => {
  return res.render('new')
})

app.get('/login', (req, res) => {
  return res.send('Login')
})

app.post('/create', (req, res) => {
  users.push(req.body.user)
  return res.redirect('/')
})

app.listen(3000)
