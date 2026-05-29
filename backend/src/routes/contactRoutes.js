const express = require("express");

const verifyToken =
require("../middleware/authMiddleware");

const router = express.Router();

const {
  createContact,
  getAllContacts
} = require("../controllers/contactController");

router.post("/", createContact);
router.get(
  "/",
  verifyToken,
  getAllContacts
);

module.exports = router;