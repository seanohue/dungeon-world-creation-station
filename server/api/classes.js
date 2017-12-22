import { Router } from 'express'
import db from '../db'

const router = Router()

/* GET users listing. */
router.get('/classes', function (req, res) {
  res.json({ classes: db.get('classes', []) })
})

/* GET user by ID. */
router.get('/classes/:id', function (req, res) {
  const id = req.params.id
  let result;
  if (id) {
    result = db.get('classes', []).find({ id })
    if (result) res.json({result})
  }
  if (!result) {
    res.sendStatus(404)
  }
})

router.post('/classes', function (req, res) {
  db.get('classes')
    .push(req.body)
    // assign id here?
    .write()
    .then(post => res.send(post))
    .catch(console.error)
})

export default router
