import {
  useEffect,
  useState
} from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

import {
  loginAdmin
} from "../services/authService";

function Login() {

  const navigate = useNavigate();

useEffect(() => {

  const token =
    localStorage.getItem(
      "token"
    );

  if (token) {

    navigate("/dashboard");
  }

}, []);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errorMessage, setErrorMessage] =
  useState("");
  const [authError, setAuthError] = useState("");

 const handleChange = (e) => {

  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

  setErrorMessage("");
  setAuthError("");
};

 const validateForm = () => {

  if (!formData.email) {

    setErrorMessage(
      "Email is required"
    )

    return false
  }

  if (
    !formData.email.includes("@")
  ) {

    setErrorMessage(
      "Enter valid email"
    )

    return false
  }

  if (!formData.password) {

    setErrorMessage(
      "Password is required"
    )

    return false
  }

  if (
    formData.password.length < 6
  ) {

    setErrorMessage(
      "Password must be minimum 6 characters"
    )

    return false
  }

  setErrorMessage("")

  return true
}

 const handleSubmit = async (e) => {

  e.preventDefault();
const isValid =
  validateForm();

if (!isValid) {

  setAuthError("");

  return;
}
  try {
  

   const response =
  await loginAdmin(
    formData
  );

  console.log(response);

    // Store Token
    localStorage.setItem(
      "token",
      response.token
    );

   setAuthError("");

    navigate("/dashboard");

  } catch (error) {
      

   setAuthError(
  error.response?.data?.message ||
  "Login Failed"
);
  }
};

  return (
    <div style={styles.container}>

      <form style={styles.form} onSubmit={handleSubmit}>
        <img
  src={logo}
  alt="Hospital Logo"
  style={styles.logo}
/>

        <h2 style={styles.heading}>
  Vaidya Vikash Hospitals
</h2>

<p style={styles.subHeading}>
  Admin Login Portal
</p>

{
  errorMessage && (
    <p style={styles.authError}>
      {errorMessage}
    </p>
  )
}

{
  authError && (
    <p style={styles.authError}>
      {authError}
    </p>
  )
}

      <input
  type="email"
  name="email"
  value={formData.email}
  placeholder="Enter Email"
  onChange={handleChange}
  style={styles.input}
/>

      

      <input
  type="password"
  name="password"
  value={formData.password}
  placeholder="Enter Password"
  onChange={handleChange}
  style={styles.input}
/>

      

        <button type="submit" style={styles.button}>
          Login
        </button>

      </form>

    </div>
  );
}

const styles = {

  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(to right, #e0f7fa, #f1f8ff)"
  },

  form: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "16px",
    width: "380px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    boxShadow:
      "0px 8px 25px rgba(0,0,0,0.1)"
  },

  heading: {
    textAlign: "center",
    color: "#1565c0",
    marginBottom: "5px",
    fontSize: "32px",
    fontWeight: "bold"
  },

  subHeading: {
    textAlign: "center",
    color: "#666",
    marginBottom: "10px",
    fontSize: "24px"

  },

  input: {
    padding: "14px",
    fontSize: "15px",
    borderRadius: "8px",
    border: "1px solid #cfd8dc",
    outline: "none"
  },

  button: {
    padding: "14px",
    backgroundColor: "#1565c0",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "0.3s"
  },

  authError: {
    color: "#d32f2f",
    fontSize: "14px",
    textAlign: "center",
    margin: 0
  },
  logo: {
  width: "120px",
  height: "120px",
  objectFit: "contain",
  alignSelf: "center",
  marginBottom: "10px"
},
};

export default Login;