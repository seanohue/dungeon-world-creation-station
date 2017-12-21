import { Router } from 'express'

import moves from './moves'

const router = Router()

router.use(moves)

export default router
