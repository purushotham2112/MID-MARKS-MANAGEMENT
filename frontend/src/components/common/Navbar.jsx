import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav style={styles.nav}>
      <h2>Student Mid Marks System</h2>

      <div>
        {user && <span style={styles.role}>{user.role.toUpperCase()}</span>}
        <button onClick={handleLogout} style={styles.btn}>
          Logout
        </button>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    backgroundColor: "#007bff",
    color: "#fff"
  },
  role: {
    marginRight: "15px",
    fontWeight: "bold"
  },
  btn: {
    padding: "6px 12px",
    border: "none",
    backgroundColor: "#dc3545",
    color: "#fff",
    cursor: "pointer"
  }
};

export default Navbar;