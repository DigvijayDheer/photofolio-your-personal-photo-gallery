import React from "react";
import logo from "../../images/logo.png";
import Styles from "./Header.module.css";
import { Container, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar className={`bg-body-tertiary ${Styles.navbar_bg}`}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          PhotoFolio
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
