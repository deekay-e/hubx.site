const mongoose = require('mongoose')
const role = require('../../constants/role')

const roleSchema = new mongoose.Schema({
	name: String,
	description: String
})

const socialSchema = new mongoose.Schema({
	name: { 
		type: String,
		unique: true
	},
	link: { 
		type: String,
		unique: true
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
			lowercase: true,
		},
		first_name: {
			type: String,
			trim: true,
			required: true,
			max: 32,
		},
		last_name: {
			type: String,
			trim: true,
			required: true,
			max: 32,
		},
		email: {
			type: String,
			trim: true,
			required: true,
			unique: true,
			lowercase: true,
		},
		profile: {
			type: String,
			required: true,
		},
		hashed_password: {
			type: String,
			required: true,
		},
		salt: String,
		bio: {
			type: String,
			max: 300,
			trim: true,
		},
		birthday: {
			type: Date,
		},
		roles: {
			type: [roleSchema],
			required: true,
			default: [role.USER],
		},
		socials: [socialSchema],
		photo: {
			data: Buffer,
			contentType: String,
		},
		resetPasswordLink: {
			data: String,
			default: '',
		},
	},
	{ timestamp: true },
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
		if (!password) return ''
		try {
			return crypto
				.createHmac('sha1', this.salt)
				.update(password)
				.digest('hex')
		} catch (err) {
			return ''
		}
	},

	makeSalt: function () {
		return Math.round(new Date().valueOf() * Math.random()) + ''
	},
}

module.exports = mongoose.model('User', userSchema)