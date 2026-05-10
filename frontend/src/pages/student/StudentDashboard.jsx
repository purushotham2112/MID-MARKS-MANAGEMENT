import React, { useEffect, useState } from "react";
import API from "../../services/api";
import Navbar from "../../components/common/Navbar";
import MarksTable from "../../components/tables/MarksTable";

const StudentDashboard = () => {
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    API.get("/marks/my").then((res) => setMarks(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>My Marks</h2>
        <MarksTable data={marks} />
      </div>
    </>
  );
};

export default StudentDashboard;