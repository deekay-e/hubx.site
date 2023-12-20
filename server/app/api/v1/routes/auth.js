const express = require('express')

const {
  preSignup,
  signup 
} = require('../../../modules/auth/controllers/auth')

const router = express.Router()

router.post('/pre-signup', preSignup)
router.post('/signup', runValidation, signup)

module.exports = router