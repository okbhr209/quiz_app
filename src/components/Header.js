import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './header.css'
function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='header'>
      <Navbar {...args}>
        <NavbarBrand href="/" style={{color:'white'}}>Quizzer</NavbarBrand>
        <NavbarToggler onClick={toggle} style={{color:'white'}} />
        <Collapse isOpen={isOpen} style={{color:'white'}} navbar>
          <Nav className="me-auto" style={{color:'white'}} navbar>
            <NavItem style={{color:'white'}}>
              <NavLink href="/quiz/" style={{color:'white'}}>Play Quiz </NavLink>
            </NavItem>
             
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;