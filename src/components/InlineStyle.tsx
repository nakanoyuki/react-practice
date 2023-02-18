import React from "react";

const InlineStyle = () => {
  const containerStyle = {
    border: "solid 1px #000",
    padding: "8px",
    margin: "20px",
    display: "flex",
    justifyContent: "space-around",
  };
  const titleStyle = {
    color: "pink",
  };
  const buttonStyle = {
    color: "blue",
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>InlineStyle</p>
      <button style={buttonStyle}>InlineStyle</button>
    </div>
  );
};

export default InlineStyle;
