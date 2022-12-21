import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from './Components/UseContext/userContext';
const Child = () => {
  // const userData=useContext(AppContext)
  // console.log(userData,"UserData")
  const userData = useGlobalContext();
  return (
   <Wrapper>
      Child:My name {userData.name} is  and age is {userData.age}
   </Wrapper>
  );
}
const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

   font-size: 3.2rem;
`;

export default Child
