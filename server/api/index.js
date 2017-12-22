import { Router } from 'express'

import moves from './moves'
import classes from './classes'
import characters from './characters'

const router = Router()

router.use(moves, classes, characters)

export default router
