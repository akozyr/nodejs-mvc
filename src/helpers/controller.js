const CONTROLLERS_PATH = '../controllers'
const DELIMITER = '@'

export default function (title) {
  const [controller, method] = title.split(DELIMITER)
  const path = `${CONTROLLERS_PATH}/${controller}Controller.js`
  
  import(path)
    .then((obj) => { console.log(obj) })
    .catch((err) => { console.error(err) })

  return function (req, res) {
    res.send('Hello world\n')
  }
}