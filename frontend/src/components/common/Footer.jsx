import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2026 Student Mid Marks System</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "10px",
    background: "#222",
    color: "#fff",
    position: "fixed",
    bottom: 0,
    width: "100%"
  }
};

export default Footer;