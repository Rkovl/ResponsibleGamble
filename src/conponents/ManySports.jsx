import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";

import {gambleActions} from './slice/GambleSlice'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Data from '../data/placeholdSideData'

const ManySports = () => {


    const decimal = useSelector((state)=> state.main.decimal)
    const manyDisplay = useSelector((state)=> state.main.manyDisplay)
    // const sports = Data
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleClick = (id) =>{

        dispatch(gambleActions.displaySingle(id))
        navigate(`/sport`)
      }

    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {

      const getData = async () => {
        let result = await fetch(`https://api.the-odds-api.com/v4/sports/${manyDisplay}/odds?markets=h2h,spreads,totals&apiKey=ebfabb39e58898b7089509435f8c3485&regions=us&markets=h2h,spreads&oddsFormat=american`)
        let data = await result.json()
        setCurrentData(data)
        console.log(currentData, 'current data')
      }

      getData()
      

    }, [manyDisplay]);

  return (
    <Row className='justify-content-center'>
    {currentData.map(sport=>{
      return <Col className='m-4 text-center'><Card style={{ width: '21rem' }} className='bg1 t2' onClick={()=>handleClick(sport)}>
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

export default ManySports