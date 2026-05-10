import React from "react";

const MarksTable = ({ data = [] }) => {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th>Student ID</th>
          <th>Subject</th>
          <th>Mid 1</th>
          <th>Mid 2</th>
          <th>Assignment</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        {data.length > 0 ? (
          data.map((m) => (
            <tr key={m._id}>
              <td>{m.studentId}</td>
              <td>{m.subject}</td>
              <td>{m.mid1}</td>
              <td>{m.mid2}</td>
              <td>{m.assignment}</td>
              <td>{m.total}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6" style={{ textAlign: "center" }}>
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px"
  }
};

export default MarksTable;