import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../../App.css";
import { Assets } from "../../Common";

const Header = ({ isHome = false }) => {
  return (
    <div className="_header-main">
      <Container-fluid>
        {/* Navbar Begin */}
        <Navbar collapseOnSelect expand="lg" bg="" variant="">
          <Navbar.Brand href="#home">
            <div className="_logo">
              <a href="/home">
                <img alt="logo" src={Assets.images.logo} className="_logo" />
                {/* Logo */}
              </a>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {!isHome ? (
            <div className="_navright-section">
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                  <div className="_navList">
                    <Nav.Link href="/product">Product</Nav.Link>
                  </div>
                  <div className="_navList">
                    <Nav.Link href="/about">Company</Nav.Link>
                  </div>
                  <div className="_navList">
                    <Nav.Link href="/library">Library</Nav.Link>
                  </div>
                  <div className="_navList">
                    <Nav.Link href="#">Contact</Nav.Link>
                  </div>
                  {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
                </Nav>
              </Navbar.Collapse>
              <div className="_hdrUserDiv">
                <a href="#" className="btn _btnCustom-2">
                  Sign In
                </a>
              </div>
            </div>
          ) : (
            <div />
          )}
        </Navbar>
        {/* Navbar End */}
      </Container-fluid>
    </div>
  );
};

export default Header;
