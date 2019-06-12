import puppeteer from 'puppeteer'

async function scrape() {
  const browser = await puppeteer.launch({args: ['--no-sandbox']})
  const page = await browser.newPage()
  await page.goto('https://www.json-generator.com/')

  await page.click('#generate')
  await page.waitFor(300)

  const result = await page.evaluate(() => {
    const json = document.querySelector('a#copy-code').getAttribute('data-clipboard-text');

    return json
  });

  browser.close()
  return result
}

export default {
  index (req, res) {
    scrape().then((res) => { console.log(res) })

    res.render('index', { title: 'Main - index', message: 'Hello there!!' })
  }
}