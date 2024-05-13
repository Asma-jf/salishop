import React from 'react'
import Navbar from '../navbar/Navbar'

type Tlayout={
    children: React.ReactNode
}
function Layout({children}:Tlayout) {
  return (
    <>
    <Navbar/>
      {children}
    </>
  )
}

export default Layout
