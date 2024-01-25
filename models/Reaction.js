const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionID: { 
    type: Schema.Types.ObjectId,
    default: () =>new Types.ObjectId()
    },
    reactionBody: {
    type: String, 
    maxlength: 280,
    required: true,
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        Type: Date,
        default: Date.now,
        //TODO: Fix get method for timestamp query
    }
    
})

module.exports = reactionSchema;