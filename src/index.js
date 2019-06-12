import express from 'express'
import path from 'path'
import mainRoutes from './routes/main.js'

const PORT = process.env.EXPOSED_PORT
const HOST = process.env.HOST

const app = express()
app.use('/', mainRoutes)
app.listen(PORT, HOST)

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'pug')

console.log(`Running on http://${HOST}:${PORT}`)
