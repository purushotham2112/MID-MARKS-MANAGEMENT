import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import API from "../../services/api";

import InputField from "../../components/forms/InputField";
import SelectField from "../../components/forms/SelectField";
import Button from "../../components/forms/Button";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "student"
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", form);
      login({ token: res.data.token, role: res.data.role });

      navigate(`/${res.data.role}`);
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="center">
      <h1>College Portal</h1>

      <div className="card">
        <InputField
          placeholder="Username"
          value={form.username}
          onChange={(e)=>setForm({...form, username:e.target.value})}
        />

        <InputField
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e)=>setForm({...form, password:e.target.value})}
        />

        <SelectField
          value={form.role}
          onChange={(e)=>setForm({...form, role:e.target.value})}
          options={[
            { value: "admin", label: "Admin" },
            { value: "hod", label: "HOD" },
            { value: "faculty", label: "Faculty" },
            { value: "student", label: "Student" }
          ]}
        />

        <Button text="Login" onClick={handleLogin} />
      </div>
    </div>
  );
};

export default Login;