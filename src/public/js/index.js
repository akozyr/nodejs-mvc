const products = io.connect('http://localhost/products')
products.on('connect', function () {
  products.on('products', function (data) {
    console.log(data)
  })
})
  