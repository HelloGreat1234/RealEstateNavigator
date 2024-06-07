const Property = require('../model/propertyModel');
const User = require('../model/userModel');
const { StatusCodes } = require('http-status-codes');
const BadRequestError = require('../errors/BadRequest');

const submitProperty = async (req, res, next) => {
  try {
    const userId = req.body.userId;
    const user = await User.findById(userId);

    if (!user) {
      throw new BadRequestError("User does not exist");
    }

    const newProperty = await Property.create({ ...req.body });

    res.status(StatusCodes.CREATED).json({
      msg: "Property Submitted",
      property: newProperty
    });
  } catch (error) {
    next(error);
  }
};

const getAllProperty = async (req, res, next) => {
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

    const properties = await Property.find(queryObject).populate('userId');

    res.status(StatusCodes.OK).json({ properties });
  } catch (error) {
    next(error);
  }
};

const getProperty = async (req, res, next) => {
  try {
    const propertyId = req.params.id;
    const property = await Property.findById(propertyId)

    if (!property) {
      throw new BadRequestError("Property does not exist");
    }

    res.status(StatusCodes.OK).json(property);
  } catch (error) {
    next(error);
  }
};

const updateProperty = async (req, res, next) => {
  try {
    const propertyId = req.params.id;
    const newDetails = req.body;

    const property = await Property.findByIdAndUpdate(propertyId, newDetails, { new: true });

    if (!property) {
      throw new BadRequestError("Property does not exist");
    }

    res.status(StatusCodes.ACCEPTED).json(property);
  } catch (error) {
    next(error);
  }
};

const deleteProperty = async (req, res, next) => {
  try {
    const propertyId = req.params.id;
    const property = await Property.findByIdAndDelete(propertyId);

    if (!property) {
      throw new BadRequestError("Property does not exist");
    }

    res.status(StatusCodes.ACCEPTED).json(property);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitProperty,
  getAllProperty,
  getProperty,
  updateProperty,
  deleteProperty
};