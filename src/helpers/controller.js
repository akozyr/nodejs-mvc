const CONTROLLERS_PATH = '../controllers'
const DELIMITER = '@'

export default function (title) {
  const [controllerName, methodName] = title.split(DELIMITER)
  const path = `${CONTROLLERS_PATH}/${controllerName}Controller.js`

  try {
    const resolvedController = require(path)

    if (!resolvedController.default.hasOwnProperty(methodName)) {
      throw new Error(`'${controllerName}' controller doesn't have '${methodName}' method.`)
    }

    return resolvedController.default[methodName]
  } catch (e) {
    console.error(e.message)
    return function (req, res) { res.status(404).end() }
  }
}
