import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";

import {gambleActions} from '../slice/GambleSlice'

const SideBar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const sports = useSelector((state)=> state.main.activeGames)

  const handleClick = (key) =>{

    dispatch(gambleActions.displayMany(key))
    navigate(`/sports`)
    

  }

  return (
    <div>
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
      {sports.map(sport=>{
        return <div onClick={()=>handleClick(sport.key)} className='sidebarborder'>{sport.title}</div>
      })}
    </div>
  )
}

export default SideBar