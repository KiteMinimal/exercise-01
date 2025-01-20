const express = require('express')
const app = express()
const router = require('../src/routes/index.routes')

app.use('/', router)


module.exports = app