// Schema for goals data
const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        // Ref is to specify the name of the schema we're using
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema)