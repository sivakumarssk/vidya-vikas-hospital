const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const blogRoutes =
  require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoutes");
const contactRoutes =
  require("./routes/contactRoutes");
const appointmentRoutes =
  require("./routes/appointmentRoutes");
  const enquiryRoutes =
  require("./routes/enquiryRoutes");
const path = require("path");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use(
  "/api/appointments",
  appointmentRoutes
);
app.use(
  "/api/enquiries",
  enquiryRoutes
);

app.use(
  "/api/blogs",
  blogRoutes
);

app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "../uploads")
  )
);


app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});