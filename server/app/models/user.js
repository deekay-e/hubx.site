const mongoose = require('mongoose')
const role = require('../constants/role')

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