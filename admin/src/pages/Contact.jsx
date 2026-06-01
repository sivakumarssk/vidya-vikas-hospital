import { useEffect, useState } from "react";

import Layout from
"../components/layout/Layout";

import {
  getContacts
} from "../services/contactService";

function Contacts() {

  const [contacts, setContacts] =
    useState([]);

    const [searchTerm, setSearchTerm] =
  useState("");

  useEffect(() => {

    fetchContacts();

  }, []);

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

  const filteredContacts = contacts.filter((contact) => {
  const date = new Date(contact.createdAt)
    .toISOString()
    .split("T")[0];

  const time = new Date(contact.createdAt)
    .toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    //contact.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //contact.phoneNumber?.includes(searchTerm) ||
    //contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //contact.message?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    date.includes(searchTerm) ||
    time.toLowerCase().includes(searchTerm.toLowerCase())
  );
});
  return (

    <Layout>

      <h1 style={styles.heading}>
        All Contacts
      </h1>

      <div style={styles.searchContainer}>

  <input
    type="text"
    placeholder="Search by date or time..."
    value={searchTerm}
    onChange={(e) =>
      setSearchTerm(e.target.value)
    }
    style={styles.searchInput}
  />

</div>

      <div style={styles.tableContainer}>

        <table style={styles.table}>

          <thead>

            <tr>

              <th style={styles.th}>
                Name
              </th>

              <th style={styles.th}>
                Phone
              </th>

              <th style={styles.th}>
                Email
              </th>

              <th style={styles.th}>
  Message
</th>

<th style={styles.th}>
  Date
</th>

<th style={styles.th}>
  Time
</th>

            </tr>

          </thead>

          <tbody>

            {
              filteredContacts.map(
                (contact) => (

                  <tr key={contact._id}>

                    <td style={styles.td}>
                      {contact.fullName}
                    </td>

                    <td style={styles.td}>
                      {contact.phoneNumber}
                    </td>

                    <td style={styles.td}>
                      {contact.email}
                    </td>

                   <td style={styles.td}>
  {contact.message}
</td>

<td style={styles.td}>
  {new Date(contact.createdAt)
  .toISOString()
  .split("T")[0]}
</td>

<td style={styles.td}>
  {new Date(
    contact.createdAt
  ).toLocaleTimeString(
    "en-IN",
    {
      hour: "2-digit",
      minute: "2-digit"
    }
  )}
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
  searchContainer: {
  marginBottom: "20px"
},

searchInput: {
  width: "300px",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "14px",
  outline: "none"
},
};

export default Contacts;