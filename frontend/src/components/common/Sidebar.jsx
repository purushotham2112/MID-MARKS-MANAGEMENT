import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const { user } = useAuth();

  return (
    <aside style={styles.sidebar}>
      <h3>Menu</h3>

      {user?.role === "admin" && <Link to="/admin">Admin</Link>}
      {user?.role === "faculty" && <Link to="/faculty">Faculty</Link>}
      {user?.role === "hod" && <Link to="/hod">HOD</Link>}
      {user?.role === "student" && <Link to="/student">Student</Link>}

      <Link to="/reports">Reports</Link>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: "200px",
    height: "100vh",
    background: "#f0f0f0",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  }
};

export default Sidebar;