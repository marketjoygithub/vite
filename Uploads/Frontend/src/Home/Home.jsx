import React from 'react'
import NavBar from '../components/navBar'
import Banner from '../components/homeBanner'
import Footer from '../components/footer'
import Freebooks from '../components/freeBooks'

function Home() {
    return (
      <>
        <div style={{position: 'relative', minHeight: '100vh'}}>
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('../public/a.jpg')",
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          opacity: 0.25,
          zIndex: -1
        }} />
      < NavBar />
      < Banner />
      < Freebooks />
      < Footer />
      </div>
      </>
  
    )
  };
export default Home;