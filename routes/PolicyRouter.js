const express = require('express')
const {generatePolicy} = require('../controller/PolicyController')
const router = express.Router()

router.route('/generate').get(generatePolicy)

module.exports = router