/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import styled from 'styled-components';

const NavStyles = styled.div`
  display: flex;
  justify-content: center;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 625px;
  text-transform: uppercase;
  margin-bottom: 30px;
  padding: 0;
  z-index: 1;
  
  
  @media (min-width: 1650px) {
    width: 750px;
  }
  
  @media (max-width: 660px) {
    width: 100%;
    flex-direction: column;
    margin: 0;
    position: absolute;
    top: ${({ isMobileOpen }) => (isMobileOpen ? '0' : '-400px')};
    transition: 0.8s all;
    background-color: rgba(0,0,0,0.7);
    padding-top: 25px;
  }
`;

const NavElement = styled.li`
  @media (max-width: 660px) {
    padding-bottom: 15px;
  }
`;

const HamburgerCnt = styled.div`
  @media (min-width: 660px) {
    display: none;
  }
  cursor: pointer;
  position: absolute;
  top: 35px;
  right: 41px;
  height: 28px;
  width: 30px;
  z-index: 2;
  
  
  div {
    position: absolute;
    top: 12px;
    right: 0px;
    width: 30px;
    height: 2px;
    background: #fff;
    display: block;
    transform-origin: center;
    transition: .5s ease-in-out;
    &:after,
    &:before {
      transition: .5s ease-in-out;
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background: #fff;
    }
    &:before {
      top: -10px;
    }
    &:after {
      bottom: -10px;
    }
  }
  
  
  
  div.open {
    transform: rotate(45deg);
    &:after {
      transform: rotate(90deg);
      bottom: 0;
    }
    &:before {
      transform: rotate(90deg);
      top: 0;
    }
  }
`;

class Navigation extends Component {
  state = {
    isMobileOpen: false,
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isMobileOpen: !prevState.isMobileOpen,
    }));
  }

  render() {
    const { isMobileOpen } = this.state;
    return (
      <NavStyles>
        <HamburgerCnt onClick={this.toggleMenu}>
          <div className={isMobileOpen ? 'open' : ''} />
        </HamburgerCnt>
        <NavList isMobileOpen={isMobileOpen}>
          <NavElement><a href="#">about</a></NavElement>
          <NavElement><a href="#">offer</a></NavElement>
          <NavElement><a href="#"><img src="./img/raspberryLogo.png" alt="raspberry" /></a></NavElement>
          <NavElement><a href="#">gallery</a></NavElement>
          <NavElement><a href="#">contact</a></NavElement>
        </NavList>
      </NavStyles>
    );
  }
}


export default Navigation;
