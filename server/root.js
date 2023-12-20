const express = require('express')
const morgan = require('morgan')

/** Create express app */
const app = express()

/** Handle server logs with morgan */
app.use(morgan('dev'))

/** Parse data to and from JSON with express */
app.use(express.json())