import React, { useState } from "react";
import API from "../../services/api";
import Navbar from "../../components/common/Navbar";
import Button from "../../components/forms/Button";
import InputField from "../../components/forms/InputField";

const FacultyMarks = () => {
  const [data, setData] = useState({
    studentId: "",
    subject: "",
    mid1: "",
    mid2: "",
    assignment: ""
  });

  const handleSubmit = async () => {
    if (data.mid1 > 25 || data.mid2 > 25 || data.assignment > 5) {
      alert("Invalid marks");
      return;
    }

    await API.post("/marks", data);
    alert("Marks saved");
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>Faculty Marks Entry</h2>

        <InputField placeholder="Student ID" onChange={(e)=>setData({...data, studentId:e.target.value})}/>
        <InputField placeholder="Subject" onChange={(e)=>setData({...data, subject:e.target.value})}/>
        <InputField type="number" placeholder="Mid1" onChange={(e)=>setData({...data, mid1:e.target.value})}/>
        <InputField type="number" placeholder="Mid2" onChange={(e)=>setData({...data, mid2:e.target.value})}/>
        <InputField type="number" placeholder="Assignment" onChange={(e)=>setData({...data, assignment:e.target.value})}/>

        <Button text="Submit" onClick={handleSubmit} />
      </div>
    </>
  );
};

export default FacultyMarks;