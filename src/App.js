import React,{useEffect, useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'

import {gambleActions} from './slice/GambleSlice'

import ActiveGames from './data/placeholdActiveSports'
import CurrentGames from './data/placeholdApp'
import SingleSport from './conponents/SingleSport'

import Cards from './conponents/CurrentCards'

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
