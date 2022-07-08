const mongoose = require('mongoose')

const policyNumberCheckSchema = new mongoose.Schema({

    policyId: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    isAvailable: {
        type: Boolean,
    }
});

module.exports = mongoose.model('PolicyNumberCheck', policyNumberCheckSchema)
