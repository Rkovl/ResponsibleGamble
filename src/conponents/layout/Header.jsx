import React from 'react'
import { useNavigate, Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {

  // const navigate = useNavigate();

  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className='bg1 ps-5 pe-5' variant='dark'>
      <Container fluid>
        <Link to='/'>
        <Navbar.Brand>
            <img
              src="/logo3.png"
              
              height="60"
              className="d-inline-block align-top"
              alt="Responsible Gamble"
            />
          </Navbar.Brand>
          </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Account</Nav.Link>
            <Nav.Link href="#deets">Responsible Settings</Nav.Link>
            <NavDropdown title="American" id="collasible-nav-dropdown">
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
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
    </div>
  )
}

export default Header