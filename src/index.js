import express from 'express'

const PORT = process.env.EXPOSED_PORT
const HOST = process.env.HOST

const app = express()
app.get('/', (req, res) => {
  res.send('Hello world\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
