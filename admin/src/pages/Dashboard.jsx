import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from
"../components/layout/Layout";

import {
  getAppointments
} from "../services/appointmentService";

import {
  getContacts
} from "../services/contactService";

import {getEnquiries} from "../services/enquiryService"

function Dashboard() {

  const navigate = useNavigate();

  const [appointments, setAppointments] =
    useState([]);

  const [contacts, setContacts] =
  useState([]);

  const [enquiries, setEnquiries] =
  useState([]);

useEffect(() => {

  fetchAppointments();
  fetchContacts();
  fetchEnquiries();

}, []);

  const fetchAppointments = async () => {

    try {

      const data =
        await getAppointments();

      setAppointments(data);

    } catch (error) {

      console.log(
        "Failed to fetch appointments"
      );
    }
  };

  const fetchContacts = async () => {

  try {

    const data =
      await getContacts();

    setContacts(data);

  } catch (error) {

    console.log(
      "Failed to fetch contacts"
    );
  }
};

const fetchEnquiries = async () => {

  try {

    const data =
      await getEnquiries();

    setEnquiries(data);

  } catch (error) {

    console.log(
      "Failed to fetch enquiries"
    );
  }
};

 return (

  <Layout style={styles.container}>

      <h1 style={styles.heading}>
        Admin Dashboard
      </h1>

      <div style={styles.grid}>

        <div
          style={styles.card}
         
        >
<h2 style={styles.title}>
  Total Appointments
</h2>

          <p style={styles.count}>
            {appointments.length}
          </p>

        </div>

        <div style={styles.contactCard}>

  <h2 style={styles.title}>
    Total Contacts
  </h2>

  <p style={styles.count}>
    {contacts.length}
  </p>

</div>

<div style={styles.enquiryCard}>

  <h2 style={styles.title}>
    Total Enquiries
  </h2>

  <p style={styles.count}>
    {enquiries.length}
  </p>

</div>

      </div>

   </Layout>
  );
}

const styles = {

container: {
  width: "100%",
  boxSizing: "border-box"
},

  heading: {
    fontSize: "34px",
    color: "#1565c0",
    marginBottom: "30px",
    fontWeight: "bold"
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
  "repeat(auto-fit, minmax(250px, 320px))",
    gap: "24px"
  },

 card: {
  background:
    "linear-gradient(135deg, #1565c0, #42a5f5)",
  color: "white",
  padding: "20px",
  borderRadius: "16px",
  boxShadow:
    "0 6px 16px rgba(0,0,0,0.1)",
  width: "240px",
  height: "160px"
},

  title: {
    fontSize: "22px",
    marginBottom: "15px"
  },

  count: {
    fontSize: "44px",
    fontWeight: "bold"
  },
  contactCard: {
  background:
    "linear-gradient(135deg, #2e7d32, #66bb6a)",
  color: "white",
  padding: "20px",
  borderRadius: "16px",
  boxShadow:
    "0 6px 16px rgba(0,0,0,0.1)",
  width: "240px",
  height: "160px"
},

enquiryCard: {
  background:
    "linear-gradient(135deg, #ef6c00, #ffb74d)",
  color: "white",
  padding: "20px",
  borderRadius: "16px",
  boxShadow:
    "0 6px 16px rgba(0,0,0,0.1)",
  width: "240px",
  height: "160px"
},
};

export default Dashboard;