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

/** Handle server logs with morgan */
app.use(morgan('dev'))

/** Parse data to and from JSON with express */
app.use(express.json())

/** Handle cross-origin requests */
app.use(cors())

/** Use imported routes */
// test index route
app.get('/', function (req, res) {
  res.send('Welcome to HUBX Consulting Web API\n')
})

app.use('/api', authRoutes)

main().catch(err => console.log(err))

async function main() {
	/** Connect to database and server */
	await mongoose.connect(settings.DB_URI)
		.then(function () {
			console.log('Successfully connected to mongodb')
			app.listen(port, () => console.log(`Server is running at: ${port}`))
		})
		.catch((error) => console.log(`${error} did not connect`))
}
