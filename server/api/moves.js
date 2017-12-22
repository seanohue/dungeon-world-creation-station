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
    console.log('SERVER: checking for ' + id)
    result = db
      .get('moves', [])
      .find(([move]) => { // WHY IS IN ARRAY?
        console.log({move})
        console.log(`Checking ${move.id} against search ${id}`)
        return move.id === id
      })
      .last()
      .value()
    console.log('SERVER: found ', result)
    if (result) res.json({ result })
  }
  if (!result) {
    res.sendStatus(404)
  }
})

router.post('/moves', function (req, res) {
  console.log('posting to moves', req.body);
  db.get('moves')
    .push(req.body)
    // assign id here?
    .write()
    .then(post => console.log(post) || res.send(post))
    .catch(console.error)
})

export default router
