import JsonDataGenerator from '../services/JsonDataGenerator.js'

const NUMBER_OF_GENERATED_PRODUCTS_PER_INTERVAL = 3
const DELAY_FOR_PRODUCTS_GENERATING = 1000

export default function productsChannel(io) {
  const products = io.of('/products')
    .on('connection', function(socket) {
      console.log('A client is connected.')
  
      socket.on('disconnect', function () {
        console.log('A client is disconnected.')
      })
    })

  const jsonDataGenerator = new JsonDataGenerator()

  setInterval(() => {
    const jsonString = jsonDataGenerator.generate(NUMBER_OF_GENERATED_PRODUCTS_PER_INTERVAL)
    products.emit('products', { data: JSON.parse(jsonString) })
  }, DELAY_FOR_PRODUCTS_GENERATING)
}