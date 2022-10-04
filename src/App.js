import React,{useEffect, useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'

import {gambleActions} from './conponents/slice/GambleSlice'

import ActiveGames from './data/placeholdActiveSports'
import CurrentGames from './data/placeholdApp'


import Cards from './conponents/FeaturedCards'

const App = () => {

  const dispatch = useDispatch()

  const headerActive = useSelector((state)=> state.main.headerActive)
  const sidebarActive = useSelector((state)=> state.main.sidebarActive)
  const centerActive = useSelector((state)=> state.main.centerActive)


  const headerClick = () =>{

  }

  const sidebarClick = () =>{
    
  }

  const centerClick = () =>{
    
  }


  useEffect(() => {

    console.log('useEffect')

    dispatch(gambleActions.addActive(ActiveGames))
    dispatch(gambleActions.addCurrent(CurrentGames))
    
  }, []);

  return (
    <div>
      <Cards/>
      
    </div>
  )
}

export default App
