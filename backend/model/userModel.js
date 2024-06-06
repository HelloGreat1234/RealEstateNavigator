const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')

const User = mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    phoneno : {
        type : String,
        required : true,
        unique : true,
        match :  [/^[+]?[0-9\s-()]*$/]
    }
})

User.pre('save', async function() {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password,salt);
    console.log("This is the hashed password : ", hashedPassword)
    this.password = hashedPassword;
})

User.methods.getToken = function(){
    console.log(this)
    const token = JWT.sign({
        id : this._id,
        name : this.username
    },process.env.JWT_SECRET,{
        expiresIn : '30d'
    })
    return token;
}

User.methods.PasswordCheck = async function(enteredPassword){
    const isPasswordCorrect = await bcrypt.compare(enteredPassword,this.password)
    return isPasswordCorrect;
}

module.exports = mongoose.model('User',User)