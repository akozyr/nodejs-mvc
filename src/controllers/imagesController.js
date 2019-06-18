import GoogleImagesScraper from '../services/GoogleImagesScraper.js'

export default {
  index (req, res) {
    (new GoogleImagesScraper()).receiveTags().then(tags => {
      res.send(tags)
    }).catch(err => {
      console.error(err)
      res.status(500).end()
    })
  }
}