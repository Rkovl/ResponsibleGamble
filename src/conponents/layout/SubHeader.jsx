import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useSelector} from 'react-redux'

const Header = () => {
  const sports = useSelector((state)=> state.main.headerSports)
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark'>
      <Container >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto ms-auto">
            {sports.map(sport=>{
              return <Nav.Link key={sport} href="#features">{sport}</Nav.Link>
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
    </div>
  )
}

export default Header