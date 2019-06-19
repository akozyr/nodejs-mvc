import JsonDataGenerator from '../services/JsonDataGenerator.js'

const NUMBER_OF_DEFAULT_PRODUCTS = 10

export default {
  index (req, res) {
    const jsonString = (new JsonDataGenerator()).generate(NUMBER_OF_DEFAULT_PRODUCTS)
    const viewData = {
      title: 'Products',
      products: JSON.parse(jsonString)
    }

    res.render('products', viewData)
  }
}
