import { Router } from 'express'
import db from '../db'

const router = Router()

/* GET users listing. */
router.get('/characters', function (req, res) {
  res.json({ characters: db.get('characters', []) })
})

/* GET user by ID. */
router.get('/characters/:id', function (req, res) {
  const id = req.params.id
  let result;
  if (id) {
    result = db.get('characters', []).find({ id })
    if (result) res.json({result})
  }
  if (!result) {
    res.sendStatus(404)
  }
})

router.post('/characters', function (req, res) {
  db.get('characters')
    .push(req.body)
    // assign id here?
    .write()
    .then(post => res.send(post))
    .catch(console.error)
})

export default router
