import React from "react";
import styled from "styled-components";

const StyledComponent = () => {
  return (
    <SContainer>
      <STitle className="title">StyledComponent</STitle>
      <SButton className="button">fight!</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 1px #000;
  padding: 8px;
  margin: 20px;
  display: flex;
  justify-content: space-around;
`;

const STitle = styled.p`
  color: pink;
`;
const SButton = styled.button`
  color: blue;
`;

export default StyledComponent;
