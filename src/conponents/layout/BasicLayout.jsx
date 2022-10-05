import React from 'react'
import Header from './Header'
import SubHeader from './SubHeader'
import SideBar from './SideBar'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BasicLayout = ({children}) => {
  return (
    <>
        <Header />
        <SubHeader/>
        <Container fluid>
          <Row>
            {/* <Col xs={2} className='bg1'></Col> */}
            <Col md={3} sm={12} className='sidebar bg1'><SideBar/></Col>
            <Col className='main'>{children} </Col>
            {/* <Col xs={1}  className='main'></Col> */}
          </Row>
        </Container>
        
        
    </>
  )
}

export default BasicLayout