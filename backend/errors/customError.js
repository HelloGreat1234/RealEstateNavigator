class customError extends Error{
    constructor(error,statusCode){
        super(error)
        this.statusCode = statusCode || 500;
    }
}

module.exports = customError