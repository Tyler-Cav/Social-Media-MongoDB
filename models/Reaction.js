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
        type: Date,
        default: Date.now,
        //TODO: Fix get method for timestamp query....This.Date(dayjs??)
    }
    
})

module.exports = reactionSchema;