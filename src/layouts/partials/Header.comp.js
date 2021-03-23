import React from "react";
// import ReactDOM from "react-dom";
// import {NavDropdown, NavbarBrand} from 'react-bootstrap';
import {
  Navbar,
  Nav,
  FormControl,
  Form,
  Button,
} from 'react-bootstrap';
// import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
// import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
// import logo from ''; <img src = {#} alt = 'logo'/>

export  const Header = () => {
  return (
    <>
  <Navbar collapseOnSelect bg="dark" variant="dark" expand='md'>
    <Navbar.Brand href="#home">CRM</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#">Dadhboard</Nav.Link>
      <Nav.Link href="#">Contacts</Nav.Link>
      <Nav.Link href="#">Calender</Nav.Link>
      <Nav.Link href="#">Pricing</Nav.Link>
      <Nav.Link href="#">Report</Nav.Link>
      <Nav.Link href="#">Sales Page </Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    <Nav className="mr-auto">
    <Nav.Link href="#">Logout</Nav.Link>
    <Nav.Link href="#">Login</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
  <br />

</>
  )
};
