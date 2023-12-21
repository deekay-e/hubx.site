const jwt = require('jsonwebtoken')

//const role = require('../../../constants/role')
const settings = require('../../../core/config')
const UserModel = require('../../../common/models/user')
const { createAccessToken } = require('../../../core/security')
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
        <p>https://hubx.consulting</p>
    `,
      }

      sgMail.send(emailData).then((sent) => {
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
      })
    } else {
      return res.status(422).json({
        message: 'Something went wrong. Try again'
      })
    }
  },

  login: function (req, res) {}
}

