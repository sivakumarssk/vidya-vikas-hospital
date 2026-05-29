const express = require("express");

const router = express.Router();

const verifyToken =
  require("../middleware/authMiddleware");

const upload =
  require("../middleware/upload");

const {
  createBlog,
  getAllBlogs,
  getBlogById,
  deleteBlog,
  updateBlog
} = require(
  "../controllers/blogController"
);

router.post(
  "/",
  verifyToken,
  upload.single("image"),
  createBlog
);

router.get(
  "/",
  getAllBlogs
);

router.get(
  "/:id",
  getBlogById
);

router.delete(
  "/:id",
  verifyToken,
  deleteBlog
);

router.put(
  "/:id",
  verifyToken,
  upload.single("image"),
  updateBlog
);

module.exports = router;