import React from "react";

const Button = ({ text, onClick, type = "button", color = "#007bff" }) => {
  return (
    <button type={type} onClick={onClick} style={{ ...styles.btn, background: color }}>
      {text}
    </button>
  );
};

const styles = {
  btn: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "5px"
  }
};

export default Button;