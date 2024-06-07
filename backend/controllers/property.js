const Property = require('../model/propertyModel')
const User = require('../model/userModel')
const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../errors/BadRequest')


const submitProperty = async (req, res, next) => {
    try {

        const userId = req.body.userId;

        const user = await User.findById(userId)

        if (!user) {
            throw new BadRequestError("User does not exist ")
        }

        const newProperty = await Property.create({ ...req.body });

        res.status(StatusCodes.CREATED).json({
            msg: "Property Submitted",
            property: newProperty
        })
    } catch (error) {
        next(error)
    }

}

const getAllProperty = async (req, res) => {
    try {
        const { minParcelSize, maxParcelSize, minPrice, maxPrice } = req.query;
        const queryObject = {};
    
        if (minParcelSize || maxParcelSize) {
          queryObject.parcelSize = {};
          if (minParcelSize) queryObject.parcelSize.$gte = Number(minParcelSize);
          if (maxParcelSize) queryObject.parcelSize.$lte = Number(maxParcelSize);
        }
    
        if (minPrice || maxPrice) {
          queryObject.price = {};
          if (minPrice) queryObject.price.$gte = Number(minPrice);
          if (maxPrice) queryObject.price.$lte = Number(maxPrice);
        }
    
        const properties = await Property.find(queryObject).populate('owner');
    
        res.status(StatusCodes.OK).json({ properties });
      } catch (error) {
        next(error);
      }

}
const getProperty = async (req, res, next) => {
    try {
        const propertyId = req.params
        console.log(propertyId)
        const property = await Property.findById(propertyId.id).populate('userId')
        if (!property) {
            throw BadRequestError("Property does not exist");
        }

        res.status(StatusCodes.OK).json(property)
    } catch (error) {
        console.log(error)
        next(error)
    }
}
const updateProperty = async (req, res) => {
    try {
        const propertyId = req.params
        const newDetails = req.body
        const property = await Property.findByIdAndUpdate(propertyId.id, newDetails)
        if (!property) {
            throw BadRequestError("Property does not exist");
        }

        const updateProperty = await Property.findById(propertyId.id).populate('userId')

        res.status(StatusCodes.ACCEPTED).json(updateProperty)
    } catch (error) {
        console.log(error)
        next(error)
    }
}
const deleteProperty = async (req, res) => {
    try {
        const propertyId = req.params

        const property = await Property.findOneAndDelete(propertyId.id)
        if (!property) {
            throw BadRequestError("Property does not exist");
        }

        res.status(StatusCodes.ACCEPTED).json(property)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    submitProperty,
    getAllProperty,
    getProperty,
    updateProperty,
    deleteProperty
}

