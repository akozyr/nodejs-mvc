import express from 'express'
import path from 'path'
import http from 'http'
import socketio from 'socket.io'
import mainRoutes from './routes/main.js'

const PORT = process.env.EXPOSED_PORT
const HOST = process.env.HOST

const app = express()
const server = http.Server(app)
const io = socketio(server)

server.listen(PORT, HOST)

app.use(express.static(path.join(__dirname, '/public')))
app.use('/', mainRoutes)

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'pug')

const products = io.of('/products')
  .on('connection', function () {
    console.log('a user is connected')
    products.emit('products', { data: 'test' })
  })

console.log(`Running on http://${HOST}:${PORT}`)
