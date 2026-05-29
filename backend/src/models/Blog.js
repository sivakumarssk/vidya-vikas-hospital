const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    shortDescription: {
      type: String,
      required: true
    },

    content: {
      type: String,
      required: true
    },

    image: {
      type: String,
      required: true
    },

    author: {
      type: String,
      default: "VVH Admin"
    },

    status: {
      type: String,
      enum: ["Published", "Draft"],
      default: "Published"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Blog",
  blogSchema
);