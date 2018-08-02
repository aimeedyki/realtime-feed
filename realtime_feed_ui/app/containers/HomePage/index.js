import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #040405;
  width: 100%;
  transform-origin: -60px;
  transform: skewY(-15deg);
`;
const TextWrapper = styled.div`
  color: white;
  font-family: Arial;
  transform: skewY(15deg);
  margin-top: 300px;
`;
const Button = styled.button`
  color: #D55D2D;
  padding: 10px;
  border: 3px solid #D55D2D;
  border-radius: 10px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14%;
  height: 60px;
  background-color: white;
  width: 100%;
  color: white;
  transform: skewY(15deg);
  align-self: flex-start;
`;
const LogoText = styled.h1`
  color: #D55D2D;
  font-family: 'Hanalei Fill', cursive;
  font-size: 40px;
  margin-left: 20px;
`;

const HomePage =props => (
  <Wrapper>
    <Header>
      <LogoText>FeeddIt</LogoText>
    </Header>
    <TextWrapper>
      <h1>Welcome</h1>
      <Button onClick={()=>{props.history.push('/feeds')}}>Join feed</Button>
    </TextWrapper>
  </Wrapper>
);

export default HomePage;
