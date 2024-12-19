import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%; /* Adjusted width to fit container */
  padding: 15px 0;
  display: flex;
  justify-content: center;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  color: white;
`;

const NavMenu = styled.div`
  display: flex;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-family: 'Verdana', sans-serif;
  font-size: 18px;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

const NavLink1 = styled.a`
  font-family: 'Verdana', sans-serif;
  font-size: 16px;
  padding: 10px 20px;
  background:linear-gradient(270deg, orange 10%,#B415ff 100%);
  color: white;
  border-radius: 15px;
  cursor: pointer;
  text-align: center;
  text-decoration:none;

  &:hover {
  background:linear-gradient(270deg, orange 10%,#B415ff 100%);
  }
`;

const Navbar = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavMenu>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About Me</NavLink>
          <NavLink href="#education">Education</NavLink>
          {/* <NavLink href="#achievements">Skills</NavLink> */}
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavMenu>
        <NavLink1 href="#contact">Connect with me</NavLink1>

        {/* <ConnectButton><NavLink href='#contact'></NavLink>Connect with Me</ConnectButton> */}
      </Nav>
    </HeaderContainer>
  );
};

export default Navbar;
