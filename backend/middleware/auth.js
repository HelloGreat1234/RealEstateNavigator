const jwt = require('jsonwebtoken')
// const { UnauthenticatedError } = require('../errors')
const UnauthenticatedError = require('../errors/Unauthorized')
const { StatusCodes } = require('http-status-codes')

const authenticationMiddleware = async (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    res.status(StatusCodes.UNAUTHORIZED).json({
        msg : "No token Provided"
    })
  }

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    console.log(decoded)
    const { id, username } = decoded
    req.user = { id, username }
    next()
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).json({
        msg : "Not authorized to access this route"
    })
    
  }
}

module.exports = authenticationMiddleware
