import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar
          style={{
            background: "rgba(0,0,0,.3)",
          }}
        >
          <Navbar.Brand href="#home" style={{ color: "#fff" }}>
            Self Help
          </Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="" style={{ color: "#fff" }}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Home
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
