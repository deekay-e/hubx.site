const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const settings = require('./app/core/config')

/** Import app routes */
const authRoutes = require('./app/api/v1/routes/auth')

/** Create express app */
const app = express()
const port = settings.API_PORT
const host = settings.API_HOST

/** Handle server logs with morgan */
app.use(morgan('dev'))

/** Parse data to and from JSON with express */
app.use(express.json())

/** Handle cross-origin requests */
app.use(cors())

/** Use imported routes */
// test index route
app.get('/', function (req, res) {
  res.send('Welcome to HUBX Consulting Web API')
})

app.use('/api', authRoutes)

/** Connect to database and server */
mongoose
	.connect(settings.DB_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(function () {
		app.listen(port, host, () => console.log(`Server is running at: ${port}`))
  })
	.catch((error) => console.log(`${error} did not connect`))

mongoose.set('useFindAndModify', false)
