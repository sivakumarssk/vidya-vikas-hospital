const express =
  require("express");

const router =
  express.Router();

  const verifyToken =
require("../middleware/authMiddleware");

const {
  createEnquiry,
  getAllEnquiries
} = require(
  "../controllers/enquiryController"
);

router.post(
  "/",
  createEnquiry
);

router.get(
  "/",
  verifyToken,
  getAllEnquiries
);

module.exports = router;