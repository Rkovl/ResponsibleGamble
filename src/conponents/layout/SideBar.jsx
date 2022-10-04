import React from 'react'

import { useSelector} from 'react-redux'

const SideBar = () => {

  const sports = useSelector((state)=> state.main.activeGames)

  console.log(sports, 'sports');

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
        return <div className='sidebarborder'>{sport.title}</div>
      })}
    </div>
  )
}

export default SideBar