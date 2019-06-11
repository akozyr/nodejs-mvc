import { Router } from 'express'
import controller from '../helpers/controller.js'

const router = Router()
router.get('/', controller('main@index'))

export default router