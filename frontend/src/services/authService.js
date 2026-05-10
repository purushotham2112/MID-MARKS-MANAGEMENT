import API from "./api";

// LOGIN
export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};

// CREATE USER (ADMIN)
export const createUser = async (data) => {
  const res = await API.post("/auth/create", data);
  return res.data;
};

// GET USERS
export const getUsers = async () => {
  const res = await API.get("/auth/users");
  return res.data;
};

// DELETE USER
export const deleteUser = async (id) => {
  const res = await API.delete(`/auth/users/${id}`);
  return res.data;
};