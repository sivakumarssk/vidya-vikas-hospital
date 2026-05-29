import { useEffect, useState } from "react";

import Layout from
"../components/layout/Layout";

import {
  getEnquiries
} from "../services/enquiryService";

function Enquiries() {

  const [enquiries, setEnquiries] =
    useState([]);

    const [searchTerm, setSearchTerm] =
  useState("");

  useEffect(() => {

    fetchEnquiries();

  }, []);

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

  const filteredEnquiries =
  enquiries.filter(
    (enquiry) => {

      const date =
        new Date(
          enquiry.createdAt
        ).toLocaleDateString(
          "en-IN"
        );

      const time =
        new Date(
          enquiry.createdAt
        ).toLocaleTimeString(
          "en-IN",
          {
            hour: "2-digit",
            minute: "2-digit"
          }
        );

      return (
        enquiry.fullName
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||

        enquiry.phoneNumber
          ?.includes(
            searchTerm
          ) ||

        date
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||

        time
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
      );
    }
  );

  return (

    <Layout>

      <h1 style={styles.heading}>
  All Enquiries
</h1>

<div style={styles.searchContainer}>

  <input
    type="text"
    placeholder="Search by name, phone, date or time..."
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

              <th style={styles.th}>
                Name
              </th>

              <th style={styles.th}>
  Phone
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
             filteredEnquiries.map(
                (enquiry) => (

                  <tr key={enquiry._id}>

                    <td style={styles.td}>
                      {enquiry.fullName}
                    </td>

                    <td style={styles.td}>
                      {enquiry.phoneNumber}
                    </td>

                    <td style={styles.td}>
  {new Date(
    enquiry.createdAt
  ).toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }
  )}
</td>

<td style={styles.td}>
  {new Date(
    enquiry.createdAt
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
  width: "320px",
  padding: "12px 16px",
  borderRadius: "8px",
  border: "1px solid #d0d7de",
  fontSize: "14px",
  outline: "none"
},
};

export default Enquiries;