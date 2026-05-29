const mongoose = require("mongoose");

const enquirySchema =
  new mongoose.Schema(
    {
      fullName: {
        type: String,
        required: true
      },

      phoneNumber: {
        type: String,
        required: true
      }
    },
    {
      timestamps: true
    }
  );

module.exports =
  mongoose.model(
    "Enquiry",
    enquirySchema
  );