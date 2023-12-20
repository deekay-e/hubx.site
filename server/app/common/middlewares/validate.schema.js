const Ajv = require('ajv').default

const AJV_OPTS = {allErrors: true}

module.exports = {

  /**
   * @description Compile the schema provided in argument and validate
   * the data for the compiled schema, and return errors if any
   *
   * @param {Object} schema - AJV Schema to validate against
   *
   * @returns {Function} - Express request handler
   */
  verify: function (schema) {
    // check for schema availability
    if (!schema) throw new Error('Schema not provided')

    return function (req, res, next) {
      const { body } = req
      const ajv = new Ajv(AJV_OPTS)
      const validate = ajv.compile(schema)
      const isValid = validate(body)

      // go to next middleware in the request chain, if the request body
      // corresponds to the schema
      if (isValid) return next()

      // return an error if everything fails. Error will most likely be
      // due to an invalid payload given in the request body
      return res.send({
        status: false,
        error: {
          message: `Invalid Payload: ${ajv.errorsText(validate.errors)}`
        }
      })
    }
  }
}