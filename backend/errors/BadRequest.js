const customError = require('../errors/customError')
const {StatusCodes} = require('http-status-codes')

class BadRequestError extends customError{
    constructor(error){
        super(error)
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

module.exports = BadRequestError;