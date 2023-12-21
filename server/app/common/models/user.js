const mongoose = require('mongoose')
const role = require('../../constants/role')

const roleSchema = new mongoose.Schema({
  name: String,
  description: String
})

const socialSchema = new mongoose.Schema({
  name: {
    type: String
  },
  link: {
    type: String
  }
})

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      max: 32,
      unique: true,
      index: true,
      lowercase: true
    },
    first_name: {
      type: String,
      trim: true,
      required: true,
      max: 32
    },
    last_name: {
      type: String,
      trim: true,
      required: true,
      max: 32
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true
    },
    profile: {
      type: String,
      required: true
    },
    hashed_password: {
      type: String,
      required: true
    },
    salt: String,
    bio: {
      type: String,
      max: 300,
      trim: true
    },
    dob: Date,
    roles: [{type: roleSchema, default: role.USER}],
    socials: [socialSchema],
    photo: {
      data: Buffer,
      contentType: String
    }
  },
  { timestamp: true }
)

/** Create virtual property that processes user password  */
userSchema
  .virtual('password')
  .set(function (password) {
    // create a temporarity variable called _password
    this._password = password
    // generate salt
    this.salt = this.makeSalt()
    // encrypt user password
    this.hashed_password = this.encryptPassword(password)
  })
  .get(function () {
    return this._password
  })

/** Create virtual property that gets the user's full name */
userSchema
  .virtual('full_name')
  .get(function () {
    // get user's full name as a combination of both
    // first and last names
    return this.first_name + ' ' + this.last_name
  })

/** Add authentication methods to the userSchema */
userSchema.methods = {
  authenticate: function (password) {
    return this.encryptPassword(password) === this.hashed_password
  },

  encryptPassword: function (password) {
    /** 
     * @description Encrypt the password using SHA256 Algorithm,
     * for enhanced security of the password
     */
    if (!password) return ''
    try {
      // Hash the password using SHA256 Algorithm then store in the DB
      return crypto
        .createHash('sha256', this.salt)
        .update(password)
        .digest('hex')
    } catch (err) {
      return err
    }
  },

  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + ''
  }
}

module.exports = mongoose.model('User', userSchema)