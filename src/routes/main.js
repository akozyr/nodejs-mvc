import { Router } from 'express'
import controller from '../helpers/controller.js'

const router = Router()

router.get('/', controller('main@index'))

router.get('/products', controller('products@index'))

router.get('/images', controller('images@index'))

export default router