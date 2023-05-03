/** @format */

import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Main>
        <div>
          <h1>CodeLab</h1>
        </div>
        <div>
          <p>About</p>
          <p>Home</p>
          <p>Contact</p>
        </div>
      </Main>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
`;
const Main = styled.div`
  width: 90%;
  height: 60px;
  background-color: red;
  display: flex;
`;
