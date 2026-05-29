import { useNavigate }
from "react-router-dom"

function Navbar() {

  const navigate =
    useNavigate()

  const handleLogout = () => {

    localStorage.removeItem(
      "token"
    )

    navigate("/")
  }

  return (

    <div style={styles.navbar}>

      <h2 style={styles.title}>
        Admin Panel
      </h2>

      <button
        style={styles.button}
        onClick={handleLogout}
      >
        Logout
      </button>

    </div>
  )
}

const styles = {

  navbar: {
    height: "70px",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 30px",
    borderBottom:
      "1px solid #e0e0e0"
  },

  title: {
    fontSize: "24px",
    color: "#1565c0",
    fontWeight: "bold"
  },

  button: {
    backgroundColor: "#1565c0",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600"
  }
}

export default Navbar