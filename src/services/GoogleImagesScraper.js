import puppeteer from 'puppeteer'

export default class GoogleImagesScraper
{
  constructor (imagePath) {
    this.imagePath = imagePath
  }
  
  async receiveTags ()
  {
    const browser = await puppeteer.launch({args: ['--no-sandbox']})
    const page = await browser.newPage()  
    
    const TARGET_URL = 'https://www.google.com/imghp'
    await page.goto(TARGET_URL)

    const SEARCH_BY_IMAGE_ICON_ELEMENT = 'div[jscontroller="TJw5qb"]'
    await page.click(SEARCH_BY_IMAGE_ICON_ELEMENT)
    
    const UPLOAD_AN_IMAGE_TAB_ELEMENT = 'div#qbug > div > a'
    await page.waitFor(UPLOAD_AN_IMAGE_TAB_ELEMENT)
    await page.click(UPLOAD_AN_IMAGE_TAB_ELEMENT)

    const IMAGE_INPUT_ELEMENT = 'input#qbfile'
    const input = await page.$(IMAGE_INPUT_ELEMENT)
    input.uploadFile(this.imagePath)

    const ALL_TAB_ELEMENT = 'div#hdtb-msb-vis > div > a'
    await page.waitFor(ALL_TAB_ELEMENT)
    await page.click(ALL_TAB_ELEMENT)

    const IMAGES_TAB_ELEMENT = 'div.hdtb-imb > a'
    await page.waitFor(IMAGES_TAB_ELEMENT)
    await page.click(IMAGES_TAB_ELEMENT)

    const TAGS_CONTAINER_ID = 'isr_chc'
    await page.waitFor(`#${TAGS_CONTAINER_ID}`)

    const tags = await page.evaluate((tagsContainerId) => {
      let tags = []
      const tagsHtmlCollection = document.getElementById(tagsContainerId).childNodes[0].childNodes[0].children

      for (item of tagsHtmlCollection) {
        tags.push(item.text)
      }

      return tags
    }, TAGS_CONTAINER_ID)

    await browser.close()
    return tags
  }
}