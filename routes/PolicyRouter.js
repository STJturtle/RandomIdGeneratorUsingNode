const express = require('express')
const {generatePolicy, fetchPolicy} = require('../controller/PolicyController')
const router = express.Router()

router.route('/generate').get(generatePolicy)
router.route('/fetch').get(fetchPolicy)

module.exports = router