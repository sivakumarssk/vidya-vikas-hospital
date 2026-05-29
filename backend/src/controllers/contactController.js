const Contact = require("../models/Contact");

const createContact = async (req, res) => {

  try {

    const {
      fullName,
      phoneNumber,
      email,
      message
    } = req.body;

    const newContact = new Contact({
      fullName,
      phoneNumber,
      email,
      message
    });

    await newContact.save();

    res.status(201).json({
      message:
        "Message Sent Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: "Please Enter all The Fields"
    });
  }
};

const getAllContacts =
  async (req, res) => {

    try {

      const contacts =
        await Contact.find()
          .sort({ createdAt: -1 });

      res.status(200).json(
        contacts
      );

    } catch (error) {

      res.status(500).json({
        message:
          "Unable to fetch contacts"
      });
    }
};

module.exports = {
  createContact,
  getAllContacts
};