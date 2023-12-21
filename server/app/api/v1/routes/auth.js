const express = require('express')

/** Import route handlers from the auth controller */
const {
  preSignup,
  signup 
} = require('../../../modules/auth/controllers/auth')

/** Create router for the auth module */
const router = express.Router()

/** Expose routes from the auth controller */
router.post('/auth/pre-signup', preSignup)
router.post('/auth/signup', signup)

module.exports = router