const mongoose = require('mongoose')

const policyNumberSchema = new mongoose.Schema({

    policyId: {
        type: String,
        unique: true,
        required: true,
        index: true 
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('PolicyNumber', policyNumberSchema)
