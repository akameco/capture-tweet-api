'use strict'
const express = require('express')
const cap = require('capture-tweet')

const app = express()

const { PORT = 3000 } = process.env

app.get('/', async (req, res) => {
  const { url } = req.query
  if (!url) {
    res.status(500).send({ error: 'required url params' })
    return
  }
  const buffer = await cap(url)
  res.type('png')
  res.send(buffer)
})

app.listen(PORT, () => {
  console.log(`port ${PORT}`)
})
