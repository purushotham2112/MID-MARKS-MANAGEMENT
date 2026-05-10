import API from "./api";

// ADD MARKS
export const addMarks = async (data) => {
  const res = await API.post("/marks", data);
  return res.data;
};

// GET ALL MARKS (HOD)
export const getAllMarks = async () => {
  const res = await API.get("/marks");
  return res.data;
};

// REVIEW MARKS (HOD)
export const reviewMarks = async (id, action) => {
  const res = await API.put(`/marks/review/${id}`, { action });
  return res.data;
};

// GET STUDENT MARKS
export const getMyMarks = async () => {
  const res = await API.get("/marks/my");
  return res.data;
};