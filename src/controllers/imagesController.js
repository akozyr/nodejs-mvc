import puppeteer from 'puppeteer'
import path from 'path'

async function scrape() {
  const browser = await puppeteer.launch({args: ['--no-sandbox']})
  const page = await browser.newPage()
  
  await page.goto('https://www.google.com/imghp')

  await page.waitFor(500)

  await page.click('div[jscontroller="TJw5qb"]')
  await page.click('div#qbug > div > a')

  const input = await page.$('input#qbfile')
  const filePath = path.normalize(path.join(__dirname, '../../car.jpg'))
  input.uploadFile(filePath)

  await page.waitFor(4000)

  await page.click('div#hdtb-msb-vis > div > a')

  await page.waitFor(4000)

  await page.click('div.hdtb-imb > a')

  await page.waitFor(3000)

  await page.setViewport({"width": 1200,"height": 800})
  await page.screenshot({path: 'a.png'})
 
  /*await page.waitFor('div#template-editor > div > div > textarea')
  await page.$eval('div#template-editor > div > div > textarea', el => {
    function getJsonSchema() {
      return [
        '{{repeat(5, 20)}}',
        {
          product_id: '{{objectId()}}',
          isAvailable: '{{bool()}}',
          price: '{{floating(100, 10000, 2)}}',
          title: '{{lorem(10, "words")}}',
          description: '{{lorem(2, "paragraphs")}}',
          seller_name: '{{firstName()}} {{surname()}}',
          company: '{{company().toUpperCase()}}',
          email: '{{email()}}',
          phone: '+1 {{phone()}}',
          address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}'
        }
      ]
    }
    
    console.log(JSON.stringify(getJsonSchema()))

    return el.value = JSON.stringify(getJsonSchema())
  })

  await page.click('a#generate')
  await page.waitFor(300)

  const result = await page.evaluate(() => {
    const json = document.querySelector('a#copy-code').getAttribute('data-clipboard-text');

    return json
  });
*/
  await browser.close()
  return
}

export default {
  index (req, res) {
    scrape().then((res) => { console.log(res) })

    res.send('Success.')
  }
}