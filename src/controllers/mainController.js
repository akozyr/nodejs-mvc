export default {
  index (req, res) {
    res.render('index', { title: 'Main - index', message: 'Hello there!!' })
  }
}