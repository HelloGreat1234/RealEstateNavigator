const User = require('../model/userModel')
const { StatusCodes } = require('http-status-codes')
const UnauthError = require('../errors/Unauthorized')

const registerUser = async (req, res) => {
    try {

        const newUser = await User.create({ ...req.body });
        const token = newUser.getToken();

        res.status(StatusCodes.CREATED).json({
            user: {
                name: newUser.name,
                email: newUser.email
            },
            token: token
        })
    } catch (error) {
        next(error)
    }
}

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });

        if (!user) {
            throw new UnauthError('Invalid Credentials')
        }

        const isPasswordCorrect = user.PasswordCheck(password);

        if (!isPasswordCorrect) {
            throw new UnauthError('Entered password is not correct');
        }

        const token = user.getToken();
        res.status(StatusCodes.CREATED).json({
            user: {
                name: user.name,
                email: user.email
            },
            token: token
        })
    }catch (error) { 
        next(error)
    }
} 

module.exports = {
    registerUser, loginUser
}