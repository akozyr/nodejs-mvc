import dummyJson from 'dummy-json'

function getJsonSchema() {
  return `[
    {{#repeat 10}}
    {
      "product_id": "{{guid}}",
      "is_available": {{boolean}},
      "price": {{float 100 10000 '0.00'}},
      "title": "{{lorem 10}}",
      "description": "{{lorem 250}}",
      "seller_name": "{{firstName}} {{lastName}}",
      "company": "{{company}}",
      "email": "{{email}}",
      "phone": "{{phone "+12 (x) xxx xxxx"}}",
      "address": "{{int 1 100}} {{street}}"
    }
    {{/repeat}}
  ]`
}

export default {
  index (req, res) {
    const jsonString = dummyJson.parse(getJsonSchema())

    res.render('index', { title: 'Dashboard', data: JSON.parse(jsonString) })
  }
}