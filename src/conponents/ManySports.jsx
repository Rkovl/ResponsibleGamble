import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";

import {gambleActions} from './slice/GambleSlice'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Data from '../data/placeholdSideData'

const ManySports = () => {

    const sports = Data
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleClick = (id) =>{

        dispatch(gambleActions.displaySingle(id))
        navigate(`/sport`)
      }

  return (
    <Row className='justify-content-center'>
    {sports.map(sport=>{
      return <Col className='m-4 text-center'><Card style={{ width: '20rem' }} className='bg1 t2' onClick={()=>handleClick(sport)}>
              <Card.Header> <strong>{sport.bookmakers[0].key.toUpperCase()}  </strong></Card.Header>
                <Card.Body className='t1'>
                  <Card.Title>{sport.sport_title}</Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                      {sport.home_team}
                      <div>{sport.bookmakers[0].markets[0].outcomes[0].price}</div>
                      </Col>
                      <Col>
                        Head to Head
                      </Col>
                      <Col>
                      {sport.away_team}
                      <div>{sport.bookmakers[0].markets[0].outcomes[1].price}</div>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
          </Card></Col>
    })}
  </Row>
  )
}

export default ManySports