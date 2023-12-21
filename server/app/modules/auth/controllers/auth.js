const jwt = require('jsonwebtoken')
//const sgm = require('@sendgrid/mail')

const role = require('../../../constants/role')
const settings = require('../../../core/config')
const { errorHandler } = require('../../../core/utils')
const UserModel = require('../../../common/models/user')
const { createAccessToken } = require('../../../core/security')

//sgm.setApiKey(settings.SENDGRID_API_KEY)

module.exports = {
  preSignup: function (req, res) {
    const { email } = req.body

    UserModel.findOne({ email }).then(function (user) {
      if (user) {
        return res.status(400).json({
          error: 'Email is taken'
        })
      }

      // Generate token using the payload from request body
      const accessToken = createAccessToken(req.body)

      // Compose activation email template
      /* const emailData = {
        from: 'signup@hubx.consulting',
        to: email,
        subject: `Account activation link`,
        html: `
        <p>Please use the following link to activate your account</p>
        <p>${settings.CLIENT_URL}/auth/account/activate/${accessToken}</p>
        <hr />
        <p>This email may contain sensitive information</p>
        <p>https://hubx.consulting</p>`,
      }

      sgm.send(emailData).then(function (sent) {
        console.log(sent)
        return res.json({
          message: `Email has been sent to ${email}.${' '}
          Follow the instructions to activate your account.${' '}
          Link expires in 10min.`,
        })
      }) */

      return res.status(200).json({
        status: true,
        data: {
          //user: JSON.stringify(user), //user.toJSON(),
          token: accessToken
        }
      })
    })
    .catch(err => console.log(err))
  },

  signup: function (req, res) {
    const token = req.body.token
    if (token) {
      jwt.verify(token, settings.JWT_ACTIVATION, function (err, decoded) {
        if (err) {
          return res.status(401).json({
            error: 'Expired link. Signup again'
          })
        }

        // Decode the user data from the token in the request body
        const {
          first_name,
          last_name,
          username,
          email,
          password
        } = jwt.decode(token)
        if (!username) username = shortid.generate()

        const profile = `${settings.CLIENT_URL}/profile/${username}`
        const user = new UserModel(
          { first_name, last_name, email, password, profile, username }
        )

        // Add a default USER role to the user to be created
        if (user.roles.length < 1) user.roles.push(role.USER)

        // Save the user to the database and indicate the status
        user.save(function (err, user) {
          if (err) {
            return res.status(401).json({
              error: errorHandler(err),
            })
          }
          return res.status(200).json({
            message: 'Signup success! Please signin',
            data: JSON.stringify(user)
          })
        })

        console.log(decoded)
      })
    } else {
      return res.status(422).json({
        message: 'Something went wrong. Try again'
      })
    }
  },

  login: function (req, res) {}
}

