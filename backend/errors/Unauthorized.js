const customError = require('../errors/customError')
const {StatusCodes} = require('http-status-codes')

class UnauthError extends customError{
    constructor(error){
        super(error)
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = UnauthError;