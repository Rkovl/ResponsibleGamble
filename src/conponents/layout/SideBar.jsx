import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";

import {gambleActions} from '../slice/GambleSlice'

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/esm/Row';


const SideBar = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch()

  const sports = useSelector((state)=> state.main.activeGames)

  const handleClick = (key) =>{

    dispatch(gambleActions.displayMany(key))
    navigate(`/sports`)
    handleClose()

  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <Button variant="warning" className="d-lg-none w-100" onClick={handleShow}>
        Sport Leagues
      </Button>
      
      <Offcanvas show={show} onHide={handleClose} responsive="lg" className='bg1'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sport Leagues</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
      {/* {sports.map(sport=>{
        console.log('object'); 
        let mainSport
        let subSports
        for(let key in sport){
          mainSport = key
          subSports = sport[key]
        }
        console.log('first')
        return <div>{mainSport} <div>{subSports.map(subsport=>{
          return <div>{subsport}</div>
        })}</div> </div>
        
      })} */}
      <Row>
      {sports.map(sport=>{
        return <div onClick={()=>handleClick(sport.key)} className='sidebarborder ms-2 t1'>{sport.title}</div>
      })}
      </Row>
      </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default SideBar