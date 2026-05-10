import React from "react";

const SelectField = ({ options = [], value, onChange }) => {
  return (
    <select value={value} onChange={onChange} style={styles.select}>
      {options.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

const styles = {
  select: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "5px"
  }
};

export default SelectField;