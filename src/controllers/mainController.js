import JsonDataGenerator from '../services/JsonDataGenerator.js'

export default {
  index (req, res) {
    const jsonString = (new JsonDataGenerator()).generate(10)

    res.render('index', { title: 'Dashboard', data: JSON.parse(jsonString) })
  }
}