// backend web framework
const express = require('express')
// Allows us to have a .env file with variables in it
const dotenv = require('dotenv').config()
// Port we want our server to run on
// process.env.PORT allows us to access the .env variable in the root
const port = process.env.PORT

//initializes express
const app = express()

// This tells the app to use the /routes/goalRoutes file if we hit the
// /api/goals API from the frontend
app.use('/api/goals', require('./routes/goalRoutes'))

// listen takes in port number, second arg is a function
app.listen(port, () => console.log(`Server started on port ${port}`))

