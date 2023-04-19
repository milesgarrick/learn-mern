// backend web framework
const express = require('express')
const colors = require('colors')
// Allows us to have a .env file with variables in it
const dotenv = require('dotenv').config()
// Port we want our server to run on
// process.env.PORT allows us to access the .env variable in the root
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT

connectDB()

//initializes express
const app = express()

// Middleware for parsing body data in an HTML request
// These two lines allow for parsing json-type and urlencoded
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// This tells the app to use the /routes/goalRoutes file if we hit the
// /api/goals API from the frontend
app.use('/api/goals', require('./routes/goalRoutes'))

// Overwrites the express built-in error handler message
app.use(errorHandler)

// listen takes in port number, second arg is a function
app.listen(port, () => console.log(`Server started on port ${port}`))

