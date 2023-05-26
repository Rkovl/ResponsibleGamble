import React from 'react'
import {  Link } from "react-router-dom";
import {useDispatch} from 'react-redux'

import {gambleActions} from '../slice/GambleSlice'

// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {

  const dispatch = useDispatch()

  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className='bg1 ps-5 pe-5 ' variant='dark'>
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
            {/* <Nav.Link href="#deets">Account</Nav.Link>
            <Nav.Link href="#deets">Responsible Settings</Nav.Link> */}
            <NavDropdown title="Odds Display" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={()=>dispatch(gambleActions.american())}>American</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>dispatch(gambleActions.decimal())}>Decimal</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
    </div>
  )
}

export default Header