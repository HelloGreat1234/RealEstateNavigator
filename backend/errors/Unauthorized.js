const CustomError = require('../errors/customError');
const { StatusCodes } = require('http-status-codes');

class UnauthError extends CustomError {
  constructor(message) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}

module.exports = UnauthError;
