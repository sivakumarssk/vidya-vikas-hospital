import api from "./api";

// Create Blog
export const createBlog =
async (formData) => {

  const response =
    await api.post(
      "/blogs",
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data"
        }
      }
    );

  return response.data;
};

// Get All Blogs
export const getBlogs =
async () => {

  const response =
    await api.get(
      "/blogs"
    );

  return response.data;
};

// Get Single Blog
export const getBlogById =
async (id) => {

  const response =
    await api.get(
      `/blogs/${id}`
    );

  return response.data;
};

// Update Blog
export const updateBlog =
async (
  id,
  formData
) => {

  const response =
    await api.put(
      `/blogs/${id}`,
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data"
        }
      }
    );

  return response.data;
};

// Delete Blog
export const deleteBlog =
async (id) => {

  const response =
    await api.delete(
      `/blogs/${id}`
    );

  return response.data;
};