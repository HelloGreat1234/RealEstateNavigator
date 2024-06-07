const express = require('express')
const router = express.Router()

const {getProperty,submitProperty,getAllProperty,deleteProperty,updateProperty} = require('../controllers/property')

router.route('/').get(getAllProperty).post(submitProperty)

router.route('/:id').get(getProperty).patch(updateProperty).delete(deleteProperty)

module.exports = router