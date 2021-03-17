import React, { Component } from "react";
import { Nav, Navbar, FormControl, Button, Form } from "react-bootstrap";

export default class Navigation extends Component {
  render() {
    return (
      <>
        <Navbar
          bg="dark"
          variant="dark"
          style={{
            backgroundColor: "#282c34",
            marginTop: "-10px",
            width: "2500px",
            height: "60px",
            marginLeft: "-9px",
          }}
        >
          <Navbar.Brand
            href="/"
            style={{ textDecoration: "none", color: "white" }}
          >
            ABC Company
          </Navbar.Brand>
          <Nav
            style={{
              textDecoration: "none",
              color: "white",
              marginTop: "10px",
              marginLeft: "50px",
            }}
          >
            <Nav.Link
              href="/signin"
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "1300px",
              }}
              onClick={logout}
            >
              Sign Out
            </Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}

function logout() {
  window.localStorage.clear();
  window.location = "/signin";
}
