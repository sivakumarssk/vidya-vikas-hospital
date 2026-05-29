const mongoose = require("mongoose");

const appointmentSchema =
  new mongoose.Schema({

    patientName: {
      type: String,
      required: true
    },

    phoneNumber: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

   preferredLocation: {
      type: String,
      required: true
    },

    department: {
      type: String,
      required: true
    },

    specialistDoctor: {
      type: String,
      required: true
    },

    preferredDate: {
      type: String,
      required: true
    },

    preferredTime: {
      type: String,
      required: true
    },

    message: {
      type: String
    },

    status: {
      type: String,
      default: "Pending"
    }

  }, {
    timestamps: true
  });

const Appointment =
  mongoose.model(
    "Appointment",
    appointmentSchema
  );

module.exports = Appointment;