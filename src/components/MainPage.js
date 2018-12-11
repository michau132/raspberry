import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Aleo';
    font-style: normal;
    font-weight: 400;
    src: url('./font/Aleo-regular.otf');
  }
  @font-face {
    font-family: 'Aleo';
    font-style: normal;
    font-weight: 700;
    src: url('./font/Aleo-Bold.otf');
  }
  @font-face {
    font-family: 'Bakery';
    font-style: normal;
    font-weight: 400;
    src: url('./font/bakery.otf');
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
  }
  body {
    padding: 0;
    margin: 0;
    line-height: 1.7;
    font-family: 'Aleo';
    color: #fff;
    font-size: 16px;
    
    @media (min-width: 1600px) {
      font-size: 19px;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled.div`
  background-image: url('./img/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 40px;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainPage = () => (
  <Wrapper>
    <GlobalStyle />
    <Navigation />
    <Content />
    <Footer />
  </Wrapper>
);

export default MainPage;
