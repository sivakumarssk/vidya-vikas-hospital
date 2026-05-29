const Enquiry =
  require("../models/Enquiry");

const createEnquiry =
  async (req, res) => {

    try {

      const {
        fullName,
        phoneNumber
      } = req.body;

      const newEnquiry =
        new Enquiry({
          fullName,
          phoneNumber
        });

      await newEnquiry.save();

      res.status(201).json({
        message:
          "Enquiry Submitted Successfully"
      });

    } catch (error) {

      res.status(500).json({
        message:
          "Server Error"
      });
    }
  };


  const getAllEnquiries =
  async (req, res) => {

    try {

      const enquiries =
        await Enquiry.find()
          .sort({ createdAt: -1 });

      res.status(200).json(
        enquiries
      );

    } catch (error) {

      res.status(500).json({
        message:
          "Failed to fetch enquiries"
      });
    }
};

module.exports = {
  createEnquiry,
  getAllEnquiries
};