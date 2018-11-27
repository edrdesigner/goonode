const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)
const routes = express.Router()
const authMiddleware = require('./app/middlewares/auth')
const guestMiddleware = require('./app/middlewares/guest')

// routes.get('/', (req, res) => {
//   return res.send('Hello Wold')
// })

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success')
  res.locals.flashError = req.flash('error')
  return next()
})

routes.get('/', guestMiddleware, SessionController.create)
routes.post('/signin', SessionController.store)

routes.get('/signup', guestMiddleware, UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)

routes.use('/app', authMiddleware) // todas as rotas que usam app passam por esse middleware

routes.get('/app/logout', SessionController.destroy)

routes.get('/app/dashboard', (req, res) => {
  return res.render('dashboard')
})

module.exports = routes
