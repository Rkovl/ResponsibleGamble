import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";

import {gambleActions} from '../slice/GambleSlice'

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const sports = useSelector((state)=> state.main.activeGames)

  const sortedSports = sports.reduce((sport, {group,title})=>{
    if (!sport[group]) sport[group] = []
    sport[group].push(title)
    return sport
  },{})

  console.log(sortedSports, 'sortedf');

  const handleClick = (sport) =>{

    const sportData = sports.filter(data=> data.title == sport)
    console.log(sport, 'sport')
    console.log(sportData, sportData.key, 'sportdadta')
    dispatch(gambleActions.displayMany(sportData[0].key))
    navigate(`/sports`)

  }

  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark'>
      <Container >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto ms-auto">
            {Object.keys(sortedSports).map(key=>{
              return <NavDropdown title={key} id="collasible-nav-dropdown">
                {sortedSports[key].map(sport=>{
                  return <NavDropdown.Item onClick={()=>handleClick(sport)}>{sport}</NavDropdown.Item>
                })}
              </NavDropdown>
            })}
            {/* {sports.map(sport=>{
              return sport.group == cache[sport.group] ? 
              <NavDropdown title={sport.group} id="collasible-nav-dropdown"></NavDropdown> 
              : 
              cache[sport.group] = sport.group 
              
              // (sport.group ? null : null)
              // return <NavDropdown title={sport.group} id="collasible-nav-dropdown">

              // </NavDropdown>
            })} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
    </div>
  )
}

export default Header