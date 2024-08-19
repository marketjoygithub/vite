import React from 'react'
import Home from './Home/Home'
import Services from './Services/services'
import {Route , Routes} from'react-router-dom'
import Register from './components/Register'

function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white dark:border'>     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  
    </>

  )
}

export default App;

