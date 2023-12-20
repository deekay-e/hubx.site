require('dotenv').config()

class Settings {
  API_NAME = process.env.API_NAME || ''
  API_HOST = process.env.API_HOST || ''
  API_PORT = process.env.API_PORT || 8008
  API_VERSION = ''

  CLIENT_URL = ''

  ENVIRONMENT = process.env.NODE_ENV || ''

  SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || ''

  JWT_SECRET = process.env.JWT_SECRET || ''
  JWT_EXPIRATION = process.env.JWT_EXPIRATION || ''

  DB_NAME = process.env.DB_NAME || ''
  DB_HOST = process.env.DB_HOST || ''
  DB_PORT = process.env.DB_PORT || ''

  constructor () {
    this.DB_URI = `mongodb://${this.DB_HOST}:${this.DB_PORT}/${this.DB_NAME}`
  }
}

module.exports = new Settings()