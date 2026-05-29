const express = require("express");

const router = express.Router();

const verifyToken =
require("../middleware/authMiddleware");

const {
  createAppointment,
  getAllAppointments,
  updateAppointmentStatus,
} = require("../controllers/appointmentController");

router.post("/", createAppointment);

router.get(
  "/",
  verifyToken,
  getAllAppointments
);

router.put(
  "/:id/status",
  verifyToken,
  updateAppointmentStatus
);

module.exports = router;
