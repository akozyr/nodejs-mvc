import path from 'path'
import GoogleImagesScraper from '../services/GoogleImagesScraper.js'

export default {
  index (req, res) {
    res.render('images', { title: 'Images' })
  },
  receiveTags (req, res) {   
    if (Object.keys(req.files).length == 0 || req.files.image.size === 0) {
      res.status(400).send('No files were uploaded.')
    }
     
    const filePath = req.files.image.tempFilePath
    const googleImagesScraper = new GoogleImagesScraper(filePath)
    
    googleImagesScraper
      .receiveTags()
      .then((tags) => {
        res.send(tags)
      }).catch((err) => {
        console.error(err)
        res.status(500).end()
      })
  }
}