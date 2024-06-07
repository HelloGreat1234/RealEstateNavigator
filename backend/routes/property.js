const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth')

const {getProperty,submitProperty,getAllProperty,deleteProperty,updateProperty} = require('../controllers/property')

router.route('/').get(authMiddleware,getAllProperty).post(authMiddleware,submitProperty)

router.route('/:id').get(authMiddleware,getProperty).patch(authMiddleware,updateProperty).delete(authMiddleware,deleteProperty)

module.exports = router