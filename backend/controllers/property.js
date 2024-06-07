const Property = require('../model/propertyModel')
const {StatusCodes} = require('http-status-codes')

const submitProperty = async(req,res) =>{
    try {
        const newProperty = await Property.create({...req.body});
        res.status(StatusCodes.CREATED).json({
            msg : "Property Submitted",
            property : newProperty
        })
    } catch (error) {
        console.log(error)
    }

}

const getAllProperty = (req,res) => {

}
const getProperty = (req,res) => {

}
const updateProperty = (req,res) => {

}
const deleteProperty = (req,res) => {

}

module.exports = {
    submitProperty,
    getAllProperty,
    getProperty,
    updateProperty,
    deleteProperty
}

