const jwt = require('jsonwebtoken')

const settings = require('../../core/config')

module.exports = {
  /**
   * @description Compile the schema provided in argument and validate
   * the data for the compiled schema, and return errors if any
   *
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * @param {Function} next - Express function to call next middleware
   *
   * @returns {} - Express response if error, nothing if not
   */
  check: function (req, res, next) {
    const authHeader = req.headers['authorization']

    // IF no auth headers are provided
    // THEN return 401 Unauthorized error
    if (!authHeader) {
      return res.status(401).json({
        status: false,
        error: {
          message: 'Auth headers not provided in the request.'
        }
      })
    }

    // IF bearer auth header is not provided
    // THEN return 401 Unauthorized error
    if (!authHeader.startsWith('Bearer')) {
      return res.status(401).json({
        status: false,
        error: {
          message: 'Invalid auth mechanism.'
        }
      })
    }

    const token = authHeader.split(' ')[1]

    // IF bearer auth header is provided, but token is not provided
    // THEN return 401 Unauthorized error
    if (!token) {
      return res.status(401).json({
        status: false,
        error: {
          message: 'Bearer token missing in the authorization headers.'
        }
      })
    }

    jwt.verify(token, settings.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({
          status: false,
          error: 'Invalid access token provided, please login again.'
        })
      }

      req.user = user // Save the user object for further use
      next()
    })
  }
}