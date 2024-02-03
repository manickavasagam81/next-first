import React, { Children } from 'react'
import Notification from './Notification'
import Header  from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
        <Notification/>
        <Header/>
        {children}
        <Footer/>

    </>
  )
}

export default Layout