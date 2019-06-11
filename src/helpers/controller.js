const CONTROLLERS_PATH = '../controllers'
const DELIMITER = '@'

export default function (title) {
  const [controllerName, methodName] = title.split(DELIMITER)
  const path = `${CONTROLLERS_PATH}/${controllerName}Controller.js`
  
  try {
    const resolvedController = require(path)

    return resolvedController.default[methodName]
  } catch (e) {
    console.error(e.message)
  }
}