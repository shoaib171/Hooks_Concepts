import React from 'react'
import styled from 'styled-components';
import Child from './Child';
import ChildSecond from './ChildSecond';
const Parent = () => {
  

  return (
   <Wrapper>
           Context-Api
      <Child />
      <ChildSecond/>
   </Wrapper>
  );
}
const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
  font-size: 3.2rem;
`;

export default Parent
