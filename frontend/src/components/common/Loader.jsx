import React from "react";

const Loader = () => {
  return (
    <div style={styles.loader}>
      <h3>Loading...</h3>
    </div>
  );
};

const styles = {
  loader: {
    textAlign: "center",
    marginTop: "50px"
  }
};

export default Loader;