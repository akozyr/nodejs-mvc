function getJsonSchema() {
  return [
    '{{repeat(5, 20)}}',
    {
      product_id: '{{objectId()}}',
      isAvailable: '{{bool()}}',
      price: '{{floating(100, 10000, 2)}}',
      title: '{{lorem(10, "words")}}',
      description: '{{lorem(2, "paragraphs")}}',
      seller_name: '{{firstName()}} {{surname()}}',
      company: '{{company().toUpperCase()}}',
      email: '{{email()}}',
      phone: '+1 {{phone()}}',
      address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}'
    }
  ]
}

export default {
  index (req, res) {
    res.render('index', { title: 'Main - index', message: 'Hello there!!' })
  }
}