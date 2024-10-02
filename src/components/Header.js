import React, { Component }  from 'react';
import {Link} from 'react-router-dom';

//import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../../public/css/main.css';
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
        <div className="page-header">
          <div className="page-header-menu">
              <div className="container container-header" >
                  <div className="hor-menu ">
                      <ul className="nav navbar-nav" >
                          <li className="menu-dropdown classic-menu-dropdown">
                            <a href="javascript:;">Time Tracking
                                  <i className="fa fa-angle-down"></i>
                            </a>
                  
                            <ul className="dropdown-menu pull-left">
                              <li>
                              <Link to="/download">Download</Link>
                              </li>
                            </ul>
                          </li>

                          <li className="menu-dropdown classic-menu-dropdown">
                            <Link to="/clients">Clients</Link>
                          </li>
                
                          <li className="menu-dropdown classic-menu-dropdown">
                            <Link to="/projects">Projects</Link>
                          </li>

                          <li className="menu-dropdown classic-menu-dropdown">
                            <Link to="/activities">Activities</Link>
                          </li>

                          <li className="menu-dropdown classic-menu-dropdown">
                            <Link to="/employees">Employees</Link>
                          </li>
                          
                          <li className="menu-dropdown classic-menu-dropdown">
                            <Link to="/companies">Companies</Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
        </div>
        
      );     
  }
}


export default Header;
