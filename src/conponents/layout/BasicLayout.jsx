import React from 'react'
import Header from './Header'

const BasicLayout = ({children}) => {
  return (
    <>
        <Header />
        <br /> <br />
        
        {children}
    </>
  )
}

export default BasicLayout