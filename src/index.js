import express from 'express'
import path from 'path'
import http from 'http'
import fileUpload from 'express-fileupload'

import mainRoutes from './routes/main.js'
import sockets from './sockets'

const PORT = process.env.EXPOSED_PORT
const HOST = process.env.HOST

const app = express()
const server = http.Server(app)

sockets(server)

server.listen(PORT, HOST)

app.use(express.static(path.join(__dirname, '/public')))
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}))
app.use('/', mainRoutes)

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'pug')

console.log(`Running on http://${HOST}:${PORT}`)
