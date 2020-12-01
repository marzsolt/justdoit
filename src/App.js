import React, { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";
//import Form from "react-bootstrap/Form";
//import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import accountService from './_services/accountService';

const App = () => {
  const [isLoged, setisLoged] = useState(false);

  const isLogedText = isLoged
    ? "Halihó, be vagy jelentkezve!"
    : "Nem vagy még ám bejelentkezve!";

  const logInOutButtonText = isLoged ? "Log out" : "Log in";

  const handleLogInOut = () => {
    accountService.login();
    //setisLoged(!isLoged);
  };

  // <div class="fb-login-button" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false" data-width=""></div>

  return (
    <div className="App">
      <Navbar bg="light" sticky="top">
        <Navbar.Brand href="#home">JustNoteIt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Button variant="primary" onClick={handleLogInOut}>
            {logInOutButtonText}
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid>{isLogedText}</Container>
    </div>
  );
};

export default App;

/*

          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        

        */
