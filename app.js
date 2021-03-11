const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')

const server = express()
server.engine('html', require('express-art-template'))
server.listen(3000, function (err) {
  console.log('running...')
})
server.use('/public', express.static('./public'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use('/', router) //router得写在全部静态资源后面
