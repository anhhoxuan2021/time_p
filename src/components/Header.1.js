import React, { Component }  from 'react';
import {Link} from 'react-router-dom';

import '../../public/css/custom.css';
import * as ReactBootstrap from 'react-bootstrap';
const Navbar = ReactBootstrap.Navbar;
const Nav = ReactBootstrap.Nav;
const NavItem = ReactBootstrap.NavItem;
const NavDropdown = ReactBootstrap.NavDropdown;
const MenuItem = ReactBootstrap.MenuItem;

const navbar = {backgroundColor: '#F16E10 !important'};
class Header extends React.Component {
  render() {
    return (
      <div>
      <Navbar inverse collapseOnSelect>
         <Navbar.Header>
           <Navbar.Brand>
             <a href="#">React-Bootstrap</a>
           </Navbar.Brand>
           <Navbar.Toggle />
         </Navbar.Header>
         <Navbar.Collapse>
           <Nav>
             <NavItem eventKey={1} href="#">Link</NavItem>
             <NavItem eventKey={2} href="#">Link</NavItem>
             <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
               <MenuItem eventKey={3.1}>Action</MenuItem>
               <MenuItem eventKey={3.2}>Another action</MenuItem>
               <MenuItem eventKey={3.3}>Something else here</MenuItem>
               <MenuItem divider />
               <MenuItem eventKey={3.3}>Separated link</MenuItem>
             </NavDropdown>
           </Nav>
           <Nav pullRight>
             <NavItem eventKey={1} href="#">Link Right</NavItem>
             <NavItem eventKey={2} href="#">Link Right</NavItem>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
      </div>
      );

      /*
      return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Test App</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav style={navbar}>
              <NavItem eventKey={1} href="#">Link1</NavItem>
              <NavItem eventKey={2} href="#">Link2</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Link3</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );*/
  }
}


export default Header;
