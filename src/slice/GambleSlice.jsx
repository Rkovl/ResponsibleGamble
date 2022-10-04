import { createSlice } from '@reduxjs/toolkit'
import Countries from '../data/countries'

const gambleSlice = createSlice({ 
    name: 'main',
    initialState: {
        headerSports: [],
        sidebarSpots: [],
        currentGames: [],
        activeGames: [],
        countries: Countries,
        singleDisplay: [],
        manyDisplay: []
    },
    reducers: {
        addActive: (state,action)=>{
            state.activeGames = action.payload

            let cacheHeader = []
            let cacheSide = []
            action.payload.map(active=>{
                let sport = active.group
                if(!cacheHeader.includes(sport)){
                    cacheHeader.push(sport)
                    cacheSide[sport] = ([active.description])
                }
                else{
                    cacheSide[sport].push(active.description)
                }
                return null
                
            })
            state.headerSports = cacheHeader
            console.log(cacheSide, 'cache')
            state.sidebarSpots = cacheSide
            // console.log(state.sidebarSpots);
            
        },
        addCurrent: (state,action)=>{
            state.currentGames = action.payload
        },
        displaySingle: (state,action)=>{
            state.singleDisplay = action.payload

        }
    }
 })
console.log("first")
 export const gambleActions = gambleSlice.actions

 export default gambleSlice.reducer