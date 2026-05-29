const Appointment =
  require("../models/Appointment");

const createAppointment =
  async (req, res) => {

    try {

  const {
  patientName,
  phoneNumber,
  email,
  preferredLocation,
  department,
  specialistDoctor,
  preferredDate,
  preferredTime,
  message
} = req.body;

     const newAppointment =
  new Appointment({
    patientName,
    phoneNumber,
    email,
    preferredLocation,
    department,
    specialistDoctor,
    preferredDate,
    preferredTime,
    message
  });

      await newAppointment.save();

      res.status(201).json({
        message:
          "Appointment Booked Successfully"
      });

    } catch (error) {

      res.status(500).json({
      message: error.message
      });
    }
  };

  const getAllAppointments =
  async (req, res) => {

    try {

      const appointments =
        await Appointment.find()
          .sort({ createdAt: -1 });

      res.status(200).json(
        appointments
      );

    } catch (error) {

      res.status(500).json({
        message:
          "Unable to fetch appointments"
      });
    }
  };

  const updateAppointmentStatus =
  async (req, res) => {

    try {

      const { id } = req.params;

      const { status } = req.body;

      const updatedAppointment =
        await Appointment.findByIdAndUpdate(
          id,
          { status },
          { new: true }
        );

      res.status(200).json({
        message:
          "Appointment status updated",
        updatedAppointment
      });

    } catch (error) {

      res.status(500).json({
        message:
          "Failed to update appointment status"
      });
    }
};

module.exports = {
  createAppointment,
  getAllAppointments,
  updateAppointmentStatus
};