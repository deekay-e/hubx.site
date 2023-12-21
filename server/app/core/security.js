const jwt = require('jsonwebtoken')

const settings = require('../core/config')

module.exports = {
  // Generates an Access Token using request body for the user's authentication
  createAccessToken: function (user) {
    return jwt.sign(
      user,
      settings.JWT_SECRET,
      {
        expiresIn: settings.JWT_EXPIRATION,
      }
    )
  },
}