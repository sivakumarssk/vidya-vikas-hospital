import Layout from "../components/layout/Layout";
import { useState, useEffect } from "react";

import {
  createBlog,
  getBlogs,
  deleteBlog
} from "../services/blogService";

function Blogs() {

    const [blogs, setBlogs] = useState([]);
const [loading, setLoading] = useState(false);

    const [formData, setFormData] =
useState({
  title: "",
  shortDescription: "",
  content: "",
  author: "",
  status: "Published"
});

useEffect(() => {
  fetchBlogs();
}, []);

const fetchBlogs = async () => {
  try {
    const data = await getBlogs();
    setBlogs(data);
  } catch (error) {
    console.log(error);
  }
};

const handleSubmit = async () => {
  try {

    setLoading(true);

    const data = new FormData();

    data.append("title", formData.title);
    data.append("shortDescription", formData.shortDescription);
    data.append("content", formData.content);
    data.append("author", formData.author);
    data.append("status", formData.status);

    if (image) {
      data.append("image", image);
    }

    await createBlog(data);

    alert("Blog Created Successfully");

    setFormData({
      title: "",
      shortDescription: "",
      content: "",
      author: "",
      status: "Published"
    });

    setImage(null);

    fetchBlogs();

  } catch (error) {

    alert("Failed To Create Blog");

  } finally {

    setLoading(false);
  }
};

const [image, setImage] =
useState(null);

  return (

 <Layout>

  <div style={styles.page}>

    <div style={styles.card}>

  <div style={styles.formGroup}>
    <label style={styles.label}>
      Blog Title
    </label>

    <input
  type="text"
  value={formData.title}
  onChange={(e) =>
    setFormData({
      ...formData,
      title: e.target.value
    })
  }
  style={styles.input}
/>
  </div>

  <div style={styles.formGroup}>
    <label style={styles.label}>
      Short Description
    </label>

  <textarea
  placeholder="Enter short description"
  rows="3"
  value={formData.shortDescription}
  onChange={(e) =>
    setFormData({
      ...formData,
      shortDescription:
        e.target.value
    })
  }
  style={styles.textarea}
/>
  </div>

  <div style={styles.formGroup}>
    <label style={styles.label}>
      Blog Content
    </label>
<textarea
  placeholder="Write complete blog content..."
  rows="8"
  value={formData.content}
  onChange={(e) =>
    setFormData({
      ...formData,
      content:
        e.target.value
    })
  }
  style={styles.textarea}
/>
  </div>

  <div style={styles.row}>

    <div style={styles.formGroup}>
      <label style={styles.label}>
        Author
      </label>

    <input
  type="text"
  placeholder="Author Name"
  value={formData.author}
  onChange={(e) =>
    setFormData({
      ...formData,
      author:
        e.target.value
    })
  }
  style={styles.input}
/>
    </div>

    <div style={styles.formGroup}>
      <label style={styles.label}>
        Status
      </label>

      <select
  value={formData.status}
  onChange={(e) =>
    setFormData({
      ...formData,
      status:
        e.target.value
    })
  }
  style={styles.input}
>
       <option value="Published">
  Published
</option>

<option value="Draft">
  Draft
</option>
      </select>
    </div>

  </div>

  <div style={styles.formGroup}>
    <label style={styles.label}>
      Upload Blog Image
    </label>

    <input
  type="file"
  style={styles.fileInput}
  onChange={(e) =>
    setImage(
      e.target.files[0]
    )
  }
/>

{
  image && (

    <img
      src={
        URL.createObjectURL(
          image
        )
      }
      alt="Preview"
      style={{
        width: "200px",
        marginTop: "15px",
        borderRadius: "12px",
        border:
          "1px solid #ddd"
      }}
    />

  )
}
  </div>

<button
  style={styles.button}
  onClick={handleSubmit}
>
  {loading ? "Creating..." : "Create Blog"}
</button>

</div>
     
    </div>


    </Layout>
  );
}

const styles = {

  heading: {
    fontSize: "32px",
    marginBottom: "25px",
    color: "#1565c0"
  },

card: {
  backgroundColor: "#fff",
  padding: "30px",
  borderRadius: "16px",
  boxShadow:
    "0 4px 12px rgba(0,0,0,0.08)",
  width: "100%",
  maxWidth: "1200px",
  marginBottom: "30px"
},

formGroup: {
  display: "flex",
  flexDirection: "column",
  marginBottom: "20px",
  flex: 1
},

label: {
  marginBottom: "8px",
  fontSize: "14px",
  fontWeight: "600",
  color: "#333"
},

input: {
  padding: "12px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  fontSize: "14px",
  outline: "none"
},

textarea: {
  padding: "12px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  fontSize: "14px",
  resize: "vertical",
  outline: "none"
},

row: {
  display: "flex",
  gap: "20px"
},

fileInput: {
  padding: "10px",
  border: "1px dashed #1565c0",
  borderRadius: "8px",
  backgroundColor: "#f8fbff"
},

button: {
  backgroundColor: "#1565c0",
  color: "#fff",
  border: "none",
  padding: "14px 24px",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer"
}
};

export default Blogs;