require('dotenv').config() // set process.env
require('./database/db')
require('express-async-errors')

const express = require('express')
const bodyParser = require('body-parser')

const cookieParser = require('cookie-parser')
const errorHandler = require('errorhandler')
const morgan = require('morgan')
const cors = require('cors')

const userRouterApi = require('./routes/user')
const photRouterApi = require('./routes/photo')
const penRouterApi = require('./routes/pen')

const app = express()

app.set('port', process.env.PORT ?? 3001)
// TODO:如果本地开发的话，需要调整这里，将cors中的配置删除，使用app.use(cors())即可
const allowedOrigins = ['https://anyphoto.space', 'https://www.anyphoto.space']

app.use(
  cors({
    origin: function (origin, callback) {
      //  || !origin
      if (allowedOrigins.includes(origin) || process.env.NODE_ENV === 'development') {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  })
)
app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/user', userRouterApi)
app.use('/api/photo', photRouterApi)
app.use('/api/pen', penRouterApi)

// Development only
// if (app.get('env') === 'development') {
//   app.use(errorHandler())
// }

app.use((err, req, res, next) => {
  if (err.message === 'access denied') {
    res.send({
      code: 401,
      message: 'Unauthorized'
    })
  }
  if (err.message === 'server error') {
    res.send({
      code: 500,
      message: 'Server error'
    })
  }
  if (err.message === 'resource conflict') {
    res.send({
      code: 409,
      message: 'Resource Conflict'
    })
  }
  next()
})

module.exports = app
