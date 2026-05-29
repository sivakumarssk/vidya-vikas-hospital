const Blog = require("../models/Blog");

const createBlog = async (
  req,
  res
) => {

  try {

    const {
      title,
      shortDescription,
      content,
      author,
      status
    } = req.body;

    const image =
      req.file
        ? `/uploads/${req.file.filename}`
        : "";

    const blog =
      await Blog.create({

        title,

        shortDescription,

        content,

        image,

        author,

        status
      });

    res.status(201).json({
      message:
        "Blog Created Successfully",
      blog
    });

  } catch (error) {

    res.status(500).json({
      message:
        "Failed To Create Blog",
      error: error.message
    });
  }
};

const getAllBlogs = async (
  req,
  res
) => {

  try {

    const blogs =
      await Blog.find()
      .sort({
        createdAt: -1
      });

    res.status(200).json(
      blogs
    );

  } catch (error) {

    res.status(500).json({
      message:
        "Failed To Fetch Blogs"
    });
  }
};

const getBlogById = async (
  req,
  res
) => {

  try {

    const blog =
      await Blog.findById(
        req.params.id
      );

    if (!blog) {

      return res.status(404).json({
        message:
        "Blog Not Found"
      });
    }

    res.status(200).json(
      blog
    );

  } catch (error) {

    res.status(500).json({
      message:
      "Failed To Fetch Blog"
    });
  }
};

const deleteBlog = async (
  req,
  res
) => {

  try {

    const blog =
      await Blog.findByIdAndDelete(
        req.params.id
      );

    if (!blog) {

      return res.status(404).json({
        message:
          "Blog Not Found"
      });
    }

    res.status(200).json({
      message:
        "Blog Deleted Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message:
        "Failed To Delete Blog"
    });
  }
};

const updateBlog = async (
  req,
  res
) => {

  try {

    const blog =
      await Blog.findById(
        req.params.id
      );

    if (!blog) {

      return res.status(404).json({
        message:
          "Blog Not Found"
      });
    }

    blog.title =
      req.body.title ||
      blog.title;

    blog.shortDescription =
      req.body.shortDescription ||
      blog.shortDescription;

    blog.content =
      req.body.content ||
      blog.content;

    blog.author =
      req.body.author ||
      blog.author;

    blog.status =
      req.body.status ||
      blog.status;

    if (req.file) {

      blog.image =
        `/uploads/${req.file.filename}`;
    }

    await blog.save();

    res.status(200).json({
      message:
        "Blog Updated Successfully",
      blog
    });

  } catch (error) {

    res.status(500).json({
      message:
        "Failed To Update Blog"
    });
  }
};


module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  deleteBlog,
  updateBlog
};