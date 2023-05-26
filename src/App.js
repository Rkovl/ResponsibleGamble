import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'

import {gambleActions} from './conponents/slice/GambleSlice'

// import ActiveGames from './data/placeholdActiveSports'
// import CurrentGames from './data/placeholdApp'


import Cards from './conponents/FeaturedCards'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {

    console.log('useEffect')

    const getActiveData = async () => {
      let result = await fetch('https://api.the-odds-api.com/v4/sports?apiKey=ebfabb39e58898b7089509435f8c3485')
      let data = await result.json()
      dispatch(gambleActions.addActive(data))

    }

    const getCurrentData = async () => {
      let result = await fetch('https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=us&markets=h2h&apiKey=ebfabb39e58898b7089509435f8c3485&oddsFormat=american')
      let data = await result.json()
      dispatch(gambleActions.addCurrent(data))

    }
    getCurrentData()
    getActiveData()

    
    
    
  }, []);

  return (
    <div>
      <Cards/>
      
    </div>
  )
}

export default App
