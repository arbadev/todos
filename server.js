'use strict'

const express = require('express')
const path = require('path')

const app = express()

const publicFiles = path.join(__dirname, '/build')
app.use(express.static(publicFiles))
// app.use(express.static('index_bundle.js'))
app.get('/', (req, res) => {
  const index = path.join(__dirname, '/build/index.html')
  res.sendFile(index)
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log('server runing')
})
