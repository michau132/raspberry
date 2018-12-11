/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  height: 50px;
  background-color: rgba(0,0,0, 0.6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 100px;
  color: #b7b7b7;
  font-size: 12px;
  
  @media (min-width: 1650px) {
    font-size: 16px;
    height: 80px;
  }
  
  @media (max-width: 660px) {
    padding: 0 20px;
    flex-direction: column;
    height: 80px;
  }
`;

const RasKingdom = styled.p`
  text-transform: uppercase;
  word-spacing: 6px;
`;

const Separator = styled.span`
  padding: 0 15px;
`;


const Footer = () => (
  <FooterStyles>
    <RasKingdom>&copy; raspberry kingdom</RasKingdom>
    <div>
      <a href="#">Cookies</a>
      <Separator>|</Separator>
      <a href="#">Privacy</a>
    </div>
    <p>
      Design by
      {' '}
      <span>Wizard of Oz</span>
    </p>
  </FooterStyles>
);

export default Footer;
