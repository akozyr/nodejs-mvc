import puppeteer from 'puppeteer'

async function scrape() {
  const browser = await puppeteer.launch({args: ['--no-sandbox']})
  const page = await browser.newPage()
  await page.goto('https://www.json-generator.com/')
 
  await page.waitFor('div#template-editor > div > div > textarea')
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

  await browser.close()
  return result
}

export default {
  index (req, res) {
    scrape().then((res) => { console.log(res) })

    res.render('index', { title: 'Main - index', message: 'Hello there!!' })
  }
}