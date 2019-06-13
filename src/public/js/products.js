(function connectToProductsChannel() {
  const URL_TO_PRODUCTS = 'http://localhost/products'
  
  const products = io.connect(URL_TO_PRODUCTS)
  products.on('connect', function () {
    products.on('products', function (data) {
      data.data.forEach(product => {
        $('table#products tbody').append(
          `<tr>
            <td>${product.product_id}</td>
            <td>${product.title}</td>
            <td>${product.is_available}</td>
            <td>${product.price}</td>
            <td>${product.seller_name}</td>
            <td>${product.company}</td>
            <td>${product.email}</td>
            <td>${product.phone}</td>
          </tr>>`
        )
      })
    })
  })
})()