import socketio from 'socket.io'

import productsChannel from './productsChannel.js'

export default function (server) {
  const io = socketio(server)

  productsChannel(io)
}
