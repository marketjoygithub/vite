import React from 'react'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import Service from '../components/Service'


function services() {
  return (
    <>
    <NavBar />
    <div className='min-h-screen'><Service/> </div>
    <Footer />
    </>
  )
}

export default services;