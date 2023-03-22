import React from 'react';
import styled from "styled-components";
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
const SpecialMenu = () => {


  return (
    <div>
      <Container>
        <Flex>
          <LeftSide></LeftSide>
          <RightSide></RightSide>
        </Flex>
      </Container>
    </div>
  );
};

export default SpecialMenu;

const Container = styled.div`
  width: 95%;
  margin: auto;
text-align:center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Flex = styled.div`
display: flex;
gap:40px; 
justify-content:center;
@media (max-width: 768px) {
    display: block;
  }
`
