const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    Author: {
        type : Schema.Types.ObjectId, 
        ref: 'User' 
    },
    textContent: {
        type: String
    },
    type: {
        type: String,
        enum: ['SUMMARY','COMMENTS','SPOILERS']
    },

  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;