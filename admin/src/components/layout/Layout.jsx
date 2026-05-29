import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({ children }) {

  return (

    <div style={styles.container}>

      <Sidebar />

      <div style={styles.main}>

        <Navbar />

        <div style={styles.content}>

          {children}

        </div>

      </div>

    </div>
  );
}

const styles = {

  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#f4f7fb"
  },

  main: {
    flex: 1,
    marginLeft: "250px",
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  },

content: {
  padding: "30px",
  overflowY: "auto",
  flex: 1
}
};

export default Layout;