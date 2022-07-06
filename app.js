const express = require('express')
const app = express()

const policyGenerator = require('./routes/PolicyRouter')

app.use('/api', policyGenerator);

// export app js
module.exports = app