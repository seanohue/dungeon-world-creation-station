import { Router } from 'express'
import db from '../db'

const router = Router()

router.get('/moves', function (req, res) {
  res.json({ moves: db.get('moves', []) })
})

router.get('/moves/:id', function (req, res) {
  const id = req.params.id
  let result;
  if (id) {
    result = db.get('moves', []).find({ id })
    if (result) res.json({ result })
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
    .catch(console.error)
})

export default router
