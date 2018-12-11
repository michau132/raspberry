import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContentStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 0.5;
  @media (max-width: 660px) {
   flex-grow: 1;
   justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 100px;
  font-family: 'Bakery';
  margin: 0px;
  
  @media (min-width: 1650px) {
    font-size: 130px;
    margin: 30px 0;
  }
  
  @media (max-width: 660px) {
    font-size: 85px;
    text-align: center;
  }
`;

const LinkStyles = styled(Link)`
  text-transform: uppercase;
  padding: 15px 40px;
  border: 3px solid #fff;
  border-radius: 60px;
  font-weight: bold;
  word-spacing: 6px;
  letter-spacing: 2px;
  
  @media (min-width: 1650px) {
    padding: 25px 55px;
  }
`;
const Content = () => (
  <ContentStyles>
    <Title>Raspberry Kingdom</Title>
    <LinkStyles to={{ pathname: '/login', state: { modal: true } }}>Enter the gates</LinkStyles>
  </ContentStyles>
);

export default Content;
