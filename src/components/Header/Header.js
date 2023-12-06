import React from "react";
import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";

const HeaderContainter = styled.div`
    height: 64px;
    display: flex;
    justify-content: space-between;
    background: #686963;
	  font: inherit;
	  vertical-align: baseline;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    padding: 0px 32px;
`;

const Brand = styled.div`
    color: white;
    font-size: 32px;
    font-weight: bold;
`;

const NavbarList = styled.div`
    display: flex;
    align-items: center;
`;

const Nav = styled(Link)`
    color: #fff;
    display: flex;
    justify-content: center;
    font-size: 16px;
    align-items: center;
    height: 64px;
    cursor: pointer;
    width: 100px;
    box-sizing: border-box;
    ${(props)=>
        props.$active &&
        `
        background: rgba(0,0,0,0.1)
    `}
`;

const LContainer = styled.div`
    display: flex;
    align-items: center;
    ${NavbarList}{
        margin-left: 32px;
    }
`;

export default function App(){
  const location = useLocation();
  return(
    <HeaderContainter>
    <LContainer>
      <Brand>Focus Orange Tree</Brand>
      <NavbarList>
        <Nav to='/' $active={location.pathname === '/'}>Introduction</Nav>
        <Nav to='/userpage' $active={location.pathname === '/userpage'}>Try it</Nav>
        <Nav to='/grouppage' $active={location.pathname === '/grouppage'}>Group</Nav>
      </NavbarList>
    </LContainer>
    <NavbarList>
      <Nav to='/login' $active={location.pathname === '/login'}>Log in</Nav>
    </NavbarList>
    </HeaderContainter>

  );
}