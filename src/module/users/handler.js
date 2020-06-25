const router = require('express').Router()
const { logger } = require('../../core/logger')
const userRepo = require('./userRepository')

router.get('/', async (req, res) => {

  try {
    const data = await userRepo.findAll()
    return res.json({ data })
  } catch (error) {

  }
  return res.json("GET: Users")
})

router.get('/:id', async (req, res) => {
  return res.json(`GET ID: Users ${req.params.id}`)
})

router.post('/', async (req, res) => {
  return res.json("POST: Users")
})

router.put('/:id', async (req, res) => {
  return res.json("GET: Users")
})

router.delete('/:id', async (req, res) => {
  return res.json("GET: Users")
})

module.exports = router