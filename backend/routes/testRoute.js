const express = require('express')
const router = express.Router();

router.route('/test').get((req,res)=>{
    res.json({
        "Hello" : "This is just a testing route for deployment"
    })
})
module.exports = router