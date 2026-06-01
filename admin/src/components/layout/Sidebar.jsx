import {
  NavLink
} from "react-router-dom";
import { useState } from "react";

function Sidebar() {

    const [hovered, setHovered] =
    useState("");

  return (

    <div style={styles.sidebar}>

      <h2 style={styles.logo}>
        VVH Admin
      </h2>

      <nav style={styles.nav}>

<NavLink
  to="/dashboard"
  onMouseEnter={() =>
    setHovered("dashboard")
  }
  onMouseLeave={() =>
    setHovered("")
  }
  style={({ isActive }) => ({
    ...styles.link,
    ...(hovered === "dashboard"
      ? styles.hoverLink
      : {}),
    ...(isActive
      ? styles.activeLink
      : {})
  })}
>
  Dashboard
</NavLink>

  <NavLink
  to="/appointments"
  onMouseEnter={() =>
    setHovered("appointments")
  }
  onMouseLeave={() =>
    setHovered("")
  }
  style={({ isActive }) => ({
    ...styles.link,
    ...(hovered === "appointments"
      ? styles.hoverLink
      : {}),
    ...(isActive
      ? styles.activeLink
      : {})
  })}
>
  Appointments
</NavLink>

     <NavLink
  to="/contacts"
  onMouseEnter={() =>
    setHovered("contacts")
  }
  onMouseLeave={() =>
    setHovered("")
  }
  style={({ isActive }) => ({
    ...styles.link,
    ...(hovered === "contacts"
      ? styles.hoverLink
      : {}),
    ...(isActive
      ? styles.activeLink
      : {})
  })}
>
  Contacts
</NavLink>

 <NavLink
  to="/enquiries"
  onMouseEnter={() =>
    setHovered("enquiries")
  }
  onMouseLeave={() =>
    setHovered("")
  }
  style={({ isActive }) => ({
    ...styles.link,
    ...(hovered === "enquiries"
      ? styles.hoverLink
      : {}),
    ...(isActive
      ? styles.activeLink
      : {})
  })}
>
  Enquiries
</NavLink>

<NavLink
  to="/blogs"
  onMouseEnter={() =>
    setHovered("blogs")
  }
  onMouseLeave={() =>
    setHovered("")
  }
  style={({ isActive }) => ({
    ...styles.link,
    ...(hovered === "blogs"
      ? styles.hoverLink
      : {}),
    ...(isActive
      ? styles.activeLink
      : {})
  })}
>
  Blogs
</NavLink>

      </nav>

    </div>
  );
}

const styles = {

 sidebar: {
  width: "200px",
  backgroundColor: "#1565c0",
  color: "white",
  height: "100vh",
  padding: "20px",
  position: "fixed",
  left: 0,
  top: 0,
  zIndex: 1000
},

  logo: {
    marginBottom: "40px"
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },

link: {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "500",
  padding: "12px 16px",
  borderRadius: "10px",
  transition: "all 0.3s ease"
},

  activeLink: {
  backgroundColor: "white",
  color: "#1565c0",
  padding: "12px 16px",
  borderRadius: "10px",
  fontWeight: "bold"
},
hoverLink: {
  backgroundColor: "rgba(255,255,255,0.15)",
  transform: "translateX(6px)",
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
}
};

export default Sidebar;