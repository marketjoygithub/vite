import React, { useEffect, useState } from 'react'
//import list from '../list.json'
import Cards from './Cards'
import { Link } from'react-router-dom'
import axios from 'axios'

function Service() {
  const [ser,setService] = useState([]);
  useEffect(()=>{
    const getService = async () => {
      try{
        const res = await axios.get('http://localhost:10000/service/');
        console.log(res.data);
        setService(res.data);
      }
      catch(error){
        console.log(error);
      }
    }
    getService();
  },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>Hello lets help you build and deploy somethingh 
          <span className='text-blue-500'> new today!!!!</span>
          </h1>
          <p className='mt-4  '>
          This web application development platform is designed to streamline and accelerate the creation of high-quality web applications. It features an intuitive interface with drag-and-drop functionality,
          an extensive component library, pre-built templates, and real-time collaboration tools.
          By integrating powerful development tools and a comprehensive component library, it enables developers to efficiently build, test, and deploy applications. Supporting a wide range of programming languages and frameworks, 
          it caters to both novice and experienced developers, enhancing productivity and delivering exceptional web experiences.
          </p>
         <Link to='/'>
         <button className='mt-6 bg-blue-500 hover:bg-blue-800 duration-300 text-white font-bold py-2 px-4 rounded-full cursor-pointer'>Get Started</button>
         </Link>
          </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4 mt-20'>
          {
          ser.map((item) => {
              return <Cards key={item.id} item={item} />
            })
          }
        </div>
    </div>
    </>
    
  )
}

export default Service;