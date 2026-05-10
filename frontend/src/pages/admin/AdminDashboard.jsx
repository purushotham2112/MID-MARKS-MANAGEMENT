import React, { useEffect, useState } from "react";
import API from "../../services/api";

import InputField from "../../components/forms/InputField";
import SelectField from "../../components/forms/SelectField";
import Button from "../../components/forms/Button";
import Navbar from "../../components/common/Navbar";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "student"
  });

  // Fetch users
  const fetchUsers = async () => {
    try {
      const res = await API.get("/auth/users");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle create user
  const handleCreate = async () => {
    if (!form.username || !form.password) {
      return alert("All fields are required");
    }

    try {
      setLoading(true);

      await API.post("/auth/create", form);

      alert("User created successfully");

      setForm({
        username: "",
        password: "",
        role: "student"
      });

      fetchUsers();
    } catch (err) {
      console.error(err);
      alert("Error creating user");
    } finally {
      setLoading(false);
    }
  };

  // Handle delete user
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete?")) return;

    try {
      await API.delete(`/auth/users/${id}`);
      alert("User deleted");
      fetchUsers();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
        <h2>Admin Dashboard</h2>

        {/* CREATE USER */}
        <div style={{ marginBottom: "20px" }}>
          <h3>Create User</h3>

          <InputField
            placeholder="Username"
            value={form.username}
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />

          <InputField
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <SelectField
            value={form.role}
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
            options={[
              { value: "student", label: "Student" },
              { value: "faculty", label: "Faculty" },
              { value: "hod", label: "HOD" },
              { value: "admin", label: "Admin" }
            ]}
          />

          <Button
            text={loading ? "Creating..." : "Create User"}
            onClick={handleCreate}
          />
        </div>

        {/* USER LIST */}
        <h3>User List</h3>

        {users.length === 0 ? (
          <p>No users found</p>
        ) : (
          users.map((u) => (
            <div
              key={u._id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                borderBottom: "1px solid #ccc"
              }}
            >
              <span>
                {u.username} ({u.role})
              </span>

              <button
                onClick={() => handleDelete(u._id)}
                style={{
                  background: "red",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer"
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default AdminDashboard;