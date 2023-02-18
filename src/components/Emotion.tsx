import React from "react";
/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const Emotion = () => {
  const containerStyle = css`
    border: solid 1px #000;
    padding: 8px;
    margin: 20px;
    display: flex;
    justify-content: space-around;
  `;
  const titleStyle = css({
    color: "pink",
  });
  const buttonStyle = css({
    color: "blue",
  });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotion</p>
      <button css={buttonStyle}>fight!</button>
    </div>
  );
};

export default Emotion;
