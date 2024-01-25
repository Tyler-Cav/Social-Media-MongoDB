const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: { String, minlength: 1, maxlength: 280 },
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
      reactions: [{
        type: Schema.Types.ObjectId,
        ref: 'reaction',
      }],
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
  
  const thought = model('Thought', thoughtSchema);
  
  module.exports = thought;