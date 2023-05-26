import React from 'react'
import {useSelector } from 'react-redux'

// import {gambleActions} from './slice/GambleSlice'

// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SingleSport = () => {

    const decimal = useSelector((state)=> state.main.decimal)
    const sports = useSelector((state)=> state.main.singleDisplay)
    // const dispatch = useDispatch()

  return (
    <div>
    <Card className="text-center bg1 t2 mt-2">
      <Card.Header>{sports.sport_title}</Card.Header>
      {sports.bookmakers.map(bookmaker=>{
        return <Card.Body>
        <Card.Title>{bookmaker.title}</Card.Title>
        <Card.Text>
          {bookmaker.markets.map(market=>{
            return <div className='border-bottom p-3'> {market.key}
            <Row>
                {market.outcomes.map(outcome=>{
                    return <Col className='bg2 ms-3 me-3 mt-2 t1' >{outcome.name}  {outcome.point} <div>{decimal ? (outcome.price>0 ?(outcome.price/100 + 1).toFixed(2):(1-(100/-outcome.price)).toFixed(2)) : outcome.price}</div></Col>
                })}
            </Row>
            </div>
          })}
        </Card.Text>
        
      </Card.Body>
      })}

      
      {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>
    </div>
  )
}

export default SingleSport