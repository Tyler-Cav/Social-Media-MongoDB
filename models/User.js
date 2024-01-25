const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
      UserName: {
        type: String,
        unique: true, 
        required: true,
        trim: true,
      },
      email: {
        type: Boolean,
        default: true,
        unique: true, 
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
      },
      thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      }],
      friends: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
      }],
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );

  userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  })
  
  const User = model('user', userSchema);
  
  module.exports = User;