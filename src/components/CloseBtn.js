import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CloseBtnStyles = styled.div`
  position: fixed;
  right: 13px;
  top: 8px;
  width: 32px;
  height: 32px;
  z-index: 5;
  cursor: pointer;
  background-color: #333;
  border-radius: 4px;
  
  :hover {
    opacity: 0.5;
  }
  :before, :after {
    content: ' ';
    position: absolute;
    left: 15px;
    height: 33px;
    width: 2px;
    background-color: #fff;
    border-radius: 15px;
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
`;

const CloseBtn = () => (
  <Link to={{ pathname: '/', state: { modal: false } }}>
    <CloseBtnStyles />
  </Link>

);

export default CloseBtn;
