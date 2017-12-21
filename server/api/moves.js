import { Router } from 'express'
import db from '../db'

const router = Router()

/* GET users listing. */
router.get('/moves', function (req, res) {
  res.json(db.get('moves'))
})

/* GET user by ID. */
router.get('/moves/:id', function (req, res) {
  const id = req.params.id
  let result;
  if (id) {
    result = db.get('moves').find({ id })
    if (result) res.json(result)
  } 
  if (!result) {
    res.sendStatus(404)
  }
})

router.post('/moves', function (req, res) {
  db.get('moves')
    .push(req.body)
    // assign id here?
    .write()
    .then(post => res.send(post))
})

export default router
