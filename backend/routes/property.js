const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth')
const upload = require('../middleware/upload')

const {getProperty,submitProperty,getAllProperty,deleteProperty,updateProperty} = require('../controllers/property')

router.route('/').get(authMiddleware,getAllProperty).post(authMiddleware,upload.single('photo'),submitProperty)

// router.post('/register',upload.single('avatar'), registerUser)

router.route('/:id').get(authMiddleware,getProperty).patch(authMiddleware,updateProperty).delete(authMiddleware,deleteProperty)

module.exports = router