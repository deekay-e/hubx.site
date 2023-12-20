require('dotenv').config()

class Settings {
  API_NAME = ''
  API_HOST = ''
  API_PORT = process.env.API_PORT || 8008
  API_VERSION = ''

  CLIENT_URL = ''

  ENVIRONMENT = process.env.NODE_ENV

  SENDGRID_API_KEY = ''

  JWT_SECRET = process.env.JWT_SECRET || ''
  JWT_EXPIRATION = process.env.JWT_EXPIRATION || ''

  DB_NAME = ''
  DB_HOST = ''
  DB_PORT = ''
}

module.exports = new Settings()