import dummyJson from 'dummy-json'

export default class JsonDataGenerator
{ 
  generate (number = 10) {
    return dummyJson.parse(this._getJsonSchema(number))
  }
  
  _getJsonSchema(number) {
    return `[
      {{#repeat ${number}}}
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
}