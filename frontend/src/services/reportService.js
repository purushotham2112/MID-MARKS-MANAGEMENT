import API from "./api";

// DOWNLOAD PDF
export const downloadPDF = async () => {
  const res = await API.get("/reports/pdf", {
    responseType: "blob"
  });

  const url = window.URL.createObjectURL(new Blob([res.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "marks.pdf");
  document.body.appendChild(link);
  link.click();
};

// DOWNLOAD EXCEL (CSV)
export const downloadExcel = async () => {
  const res = await API.get("/reports/excel", {
    responseType: "blob"
  });

  const url = window.URL.createObjectURL(new Blob([res.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "marks.csv");
  document.body.appendChild(link);
  link.click();
};