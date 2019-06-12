import puppeteer from 'puppeteer'

async function getPic() {
  const browser = await puppeteer.launch({args: ['--no-sandbox']})
  const page = await browser.newPage()
  await page.goto('https://google.com')
  await page.screenshot({path: 'google.png'})

  await browser.close()
}

export default {
  index (req, res) {
    getPic()

    res.render('index', { title: 'Main - index', message: 'Hello there!!' })
  }
}