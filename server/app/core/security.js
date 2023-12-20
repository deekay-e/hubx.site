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

  /*
  // Encrypt the password using SHA256 Algorithm, for enhanced security of the password
  encryptPassword: function (password) {
    // We will hash the password using SHA256 Algorithm before storing in the DB
    // Creating SHA-256 hash object
    const hash = crypto.createHash('sha256')
    // Update the hash object with the string to be encrypted
    hash.update(password)
    // Get the encrypted value in hexadecimal format
    return hash.digest('hex')
  }
  */
}