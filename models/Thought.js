const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        minlength: 1, 
        maxlength: 280,
        required: true,
      },
      createdAt: {
        Type: Date,
        default: Date.now,
        //TODO: Fix get method for timestamp query
      },
      username: {
        type: String,
        required: true
      },
      reactions: [reactionSchema]
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );

  thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  })
  
  const Thought = model('Thought', thoughtSchema);
  
  module.exports = Thought;