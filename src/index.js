import express from 'express'
import mainRoutes from './routes/main.js'

const PORT = process.env.EXPOSED_PORT
const HOST = process.env.HOST

const app = express()
app.use('/', mainRoutes)
app.listen(PORT, HOST)

console.log(`Running on http://${HOST}:${PORT}`)
