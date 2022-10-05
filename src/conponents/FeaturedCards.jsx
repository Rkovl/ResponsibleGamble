import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";

import {gambleActions} from './slice/GambleSlice'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const FeaturedCards = () => {

    const sports = useSelector((state)=> state.main.currentGames)
    const decimal = useSelector((state)=> state.main.decimal)
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
                      <div>{decimal ? (sport.bookmakers[0].markets[0].outcomes[0].price > 0 ? (sport.bookmakers[0].markets[0].outcomes[0].price/100 +1).toFixed(2):(1-(100/-sport.bookmakers[0].markets[0].outcomes[0].price)).toFixed(2)) : sport.bookmakers[0].markets[0].outcomes[0].price}</div>
                      </Col>
                      <Col>
                        Head to Head
                      </Col>
                      <Col>
                      {sport.away_team}
                      <div>{decimal ? (sport.bookmakers[0].markets[0].outcomes[1].price > 0 ? (sport.bookmakers[0].markets[0].outcomes[1].price/100 +1).toFixed(2):(1-(100/-sport.bookmakers[0].markets[0].outcomes[1].price)).toFixed(2)) : sport.bookmakers[0].markets[0].outcomes[1].price}</div>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
          </Card></Col>
    })}
  </Row>
  )
}

export default FeaturedCards