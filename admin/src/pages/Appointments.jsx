import { useEffect, useState } from "react";

import Layout from
"../components/layout/Layout";

import {
  getAppointments,
  updateAppointmentStatus
} from "../services/appointmentService";


function Appointments() {

  const [appointments, setAppointments] =
    useState([]);

    const [searchTerm, setSearchTerm] =
  useState("");

  useEffect(() => {

    fetchAppointments();

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

  const handleStatusChange =
  async (id, status) => {

    try {

      await updateAppointmentStatus(
        id,
        status
      );

      fetchAppointments();

    } catch (error) {

      console.log(
        "Failed to update status"
      );
    }
};

const filteredAppointments =
  appointments.filter(
    (appointment) => {

      return (
        appointment.patientName
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||

        appointment.preferredLocation
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||

        appointment.department
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||

        appointment.specialistDoctor
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||

        appointment.preferredDate
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||

        appointment.preferredTime
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
      );
    }
  );

  return (

    <Layout>

      <h1 style={styles.heading}>
        All Appointments
      </h1>

      <div style={styles.searchContainer}>

  <input
    type="text"
    placeholder="Search by date or time..."
    value={searchTerm}
    onChange={(e) =>
      setSearchTerm(
        e.target.value
      )
    }
    style={styles.searchInput}
  />

</div>

      <div style={styles.tableContainer}>

        <table style={styles.table}>

          <thead>

  <tr>

    <th style={styles.th}>Patient</th>

    <th style={styles.th}>Phone</th>

    <th style={styles.th}>Email</th>

    <th style={styles.th}>Location</th>

    <th style={styles.th}>Department</th>

    <th style={styles.th}>Doctor</th>

    <th style={styles.th}>Date</th>

    <th style={styles.th}>Time</th>

    

    <th style={styles.th}>Status</th>

  </tr>

</thead>

          <tbody>

  {
    filteredAppointments.map(
      (appointment) => (

        <tr key={appointment._id}>

          <td style={styles.td}>
            {appointment.patientName}
          </td>

          <td style={styles.td}>
            {appointment.phoneNumber}
          </td>

          <td style={styles.td}>
            {appointment.email}
          </td>

          <td style={styles.td}>
            {appointment.preferredLocation}
          </td>

          <td style={styles.td}>
            {appointment.department}
          </td>

          <td style={styles.td}>
              {appointment.specialistDoctor}
          </td>

          <td style={styles.td}>
              {appointment.preferredDate}
          </td>

          <td style={styles.td}>
               {appointment.preferredTime}
          </td>

         

        <td style={styles.td}>

  <select
    value={appointment.status}
    onChange={(e) =>
      handleStatusChange(
        appointment._id,
        e.target.value
      )
    }
    style={
      appointment.status ===
      "Completed"
        ? styles.completedSelect
        : styles.pendingSelect
    }
  >

    <option value="Pending">
      Pending
    </option>

    <option value="Completed">
      Completed
    </option>

  </select>

</td>

        </tr>
      )
    )
  }

</tbody>

        </table>

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

tableContainer: {
  backgroundColor: "white",
  borderRadius: "16px",
  overflowY: "auto",
  height: "calc(100vh - 220px)",
  boxShadow:
    "0 4px 12px rgba(0,0,0,0.08)"
},

  table: {
    width: "100%",
    borderCollapse: "collapse"
  },

 th: {
  backgroundColor: "#1565c0",
  color: "white",
  padding: "14px",
  textAlign: "left",
  fontSize: "14px",
  position: "sticky",
  top: 0,
  zIndex: 1
},

td: {
  padding: "14px",
  borderBottom:
    "1px solid #e0e0e0",
  fontSize: "14px",
  color: "#333"
},

pending: {
  backgroundColor: "#fff3cd",
  color: "#856404",
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "bold"
},

completed: {
  backgroundColor: "#d4edda",
  color: "#155724",
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "bold"
},
pendingSelect: {
  backgroundColor: "#fff3cd",
  color: "#856404",
  padding: "8px",
  borderRadius: "8px",
  border: "none",
  fontWeight: "bold",
  outline: "none"
},

completedSelect: {
  backgroundColor: "#d4edda",
  color: "#155724",
  padding: "8px",
  borderRadius: "8px",
  border: "none",
  fontWeight: "bold",
  outline: "none"
},
searchContainer: {
  marginBottom: "20px",
},

searchInput: {
  width: "400px",
  padding: "12px 16px",
  borderRadius: "8px",
  border: "1px solid #d0d7de",
  fontSize: "14px",
  outline: "none"
},
};

export default Appointments;