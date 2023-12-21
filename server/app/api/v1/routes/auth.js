const express = require('express')

const {
  preSignup,
  signup 
} = require('../../../modules/auth/controllers/auth')

const router = express.Router()

router.post('/auth/pre-signup', preSignup)
router.post('/auth/signup', signup)

module.exports = router