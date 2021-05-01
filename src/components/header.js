import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/naxLogo.jpg";

const Header = () => {
  return (
    <Navbar bg="light" variant="light" fixed="top">
      <Navbar.Brand>
        <img src={logo} className="nax-logo" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/home">Home</Link>
        </Nav.Link>
        <NavDropdown title="Products" id="collasible-nav-dropdown">
          <NavDropdown.Item>
            <Link to="/product"> Industrial Pcs</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/product">PLC System</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/product">I/O System</Link>
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link>
          <Link to="/about">About Us</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/contact">Contact</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
