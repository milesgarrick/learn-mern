// Middleware are functions that execute during the request-response cycle
// Overwrites default express error handler message
const errorHandler = (err, req, res, next) => {
    // If res.statusCode is set then use it, otherwise set it to 500
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        message: err.message,
        // if NODE_ENV is production (live) then set stack to null
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = {
    errorHandler
}