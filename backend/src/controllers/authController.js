const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const registerAdmin = async (req, res) => {

  try {

    // Get Secret Key From Headers
    const adminSecret =
      req.headers["x-admin-secret"];

    // Verify Secret Key
    if (
      adminSecret !==
      process.env.ADMIN_SECRET_KEY
    ) {
      return res.status(401).json({
        message: "Unauthorized Access"
      });
    }

    const { email, password } = req.body;

    // Check Existing Admin
    const existingAdmin =
      await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(400).json({
        message: "Admin Already Exists"
      });
    }

    // Hash Password
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // Create Admin
    const admin = new Admin({
      email,
      password: hashedPassword
    });

    await admin.save();

    res.status(201).json({
      message:
        "Admin Registered Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error"
    });
  }
};


const loginAdmin = async (req, res) => {

  try {

    const { email, password } = req.body;

    // Check Admin Exists
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({
        message: "Invalid Email"
      });
    }

    // Compare Password
    const isPasswordMatched =
      await bcrypt.compare(
        password,
        admin.password
      );

    if (!isPasswordMatched) {
      return res.status(400).json({
        message: "Invalid Password"
      });
    }

    // Generate JWT Token
    const token = jwt.sign(
      {
        adminId: admin._id
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d"
      }
    );

    res.status(200).json({
      message: "Login Successful",
      token
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error"
    });
  }
};

module.exports = {
  registerAdmin,
  loginAdmin
};