import GoogleImagesScraper from '../services/GoogleImagesScraper.js'

export default {
  index (req, res) {
    res.render('images', { title: 'Images' })
  },
  async receiveTags (req, res) {   
    if (Object.keys(req.files).length == 0 || req.files.image.size === 0) {
      res.status(400).send('No files were uploaded.')
    }
     
    const filePath = req.files.image.tempFilePath
    const googleImagesScraper = new GoogleImagesScraper(filePath)
    
    try {
      const tags = await googleImagesScraper.receiveTags()
      res.send(tags)
    } catch (e) {
      console.error(err)
      res.status(500).end()
    }
  }
}