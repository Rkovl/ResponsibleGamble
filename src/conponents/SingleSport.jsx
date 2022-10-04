import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'

import {gambleActions} from '../slice/GambleSlice'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SingleSport = () => {

    const sports = useSelector((state)=> state.main.singleDisplay)
    const dispatch = useDispatch()

  return (
    <div>
    <Card className="text-center bg1 t1 mt-2">
      <Card.Header>{sports.sport_title}</Card.Header>
      {sports.bookmakers.map(bookmaker=>{
        return <Card.Body>
        <Card.Title>{bookmaker.title}</Card.Title>
        <Card.Text>
          {bookmaker.markets.map(market=>{
            return <div className='border-bottom p-3'> {market.key}
            <Row>
                {market.outcomes.map(outcome=>{
                    return <Col className='bg2 ms-3 me-3 mt-2'>{outcome.name} <div>{outcome.price}</div></Col>
                })}
            </Row>
            </div>
          })}
        </Card.Text>
        
      </Card.Body>
      })}

      
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>
  )
}

export default SingleSport