import React from "react";
import "./header.scss";
import { Navbar, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <h1>RESTy</h1>
      </header>
      <Navbar bg="light" expand="lg" >
        {/* <Navbar.Brand href="#">Home</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link className="mr-4" >
              <Link className="link-none" to="/">Home</Link>
            </Nav.Link>
          <Nav.Link className="mr-4" >
              <Link className="link-none"  to="/history">History</Link>
            </Nav.Link>
            <Nav.Link className="mr-4" >
              <Link className="link-none"  to="/help">Help</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
