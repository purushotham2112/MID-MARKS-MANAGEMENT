import React, { useEffect, useState } from "react";
import API from "../../services/api";
import Navbar from "../../components/common/Navbar";

const HODDashboard = () => {
  const [marks, setMarks] = useState([]);

  const fetchMarks = async () => {
    const res = await API.get("/marks");
    setMarks(res.data);
  };

  useEffect(() => {
    fetchMarks();
  }, []);

  const handleReview = async (id, action) => {
    await API.put(`/marks/review/${id}`, { action });
    fetchMarks();
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>HOD Approval Dashboard</h2>

        {marks.map((m) => (
          <div key={m._id}>
            {m.studentId} - {m.total} ({m.status})
            {!m.locked && (
              <>
                <button onClick={() => handleReview(m._id, "approve")}>Approve</button>
                <button onClick={() => handleReview(m._id, "reject")}>Reject</button>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default HODDashboard;