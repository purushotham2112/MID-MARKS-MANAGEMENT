import React from "react";
import API from "../../services/api";
import Navbar from "../../components/common/Navbar";
import Button from "../../components/forms/Button";

const Reports = () => {

  const downloadPDF = async () => {
    const res = await API.get("/reports/pdf", { responseType: "blob" });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "marks.pdf");
    link.click();
  };

  const downloadExcel = async () => {
    const res = await API.get("/reports/excel", { responseType: "blob" });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "marks.csv");
    link.click();
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>Reports</h2>

        <Button text="Download PDF" onClick={downloadPDF} />
        <Button text="Download Excel" onClick={downloadExcel} color="#28a745" />
      </div>
    </>
  );
};

export default Reports;