const UserModel = require('../models/user')

module.exports = {
  /**
   * @description Compile the schema provided in argument and validate
   * the data for the compiled schema, and return errors if any
   *
   * @param {Object} role - User role to check permission on
   *
   * @returns {Function} - Express request handler
   */
  has: function (role) {
    return function (req, res, next) {
      const { user: { userId } } = req

      UserModel.findOne({ _id: userId }).then(function (user) {
        // IF user does not exist in our database, means something is fishy
        // THEN we will return forbidden error and ask user to login again
        if (!user) {
          return res.status(403).json({
            status: false,
            error: 'Invalid access token provided, please login again.',
          })
        }

        const userRoles = user.roles

        // IF user does not possess the required role
        // THEN return forbidden error
        userRoles.forEach(userRole => {
          if (userRole !== role) {
            return res.status(403).json({
              status: false,
              error: `You need to be a ${role} to access this endpoint.`,
            })
          }
        })

        next()
      })
    }
  },
}