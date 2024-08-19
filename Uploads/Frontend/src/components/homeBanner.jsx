import React from 'react'
import banner from "../../public/Bannerimg.jpg"
import { Link } from 'react-router-dom'
function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className=' order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
            <div className='space-y-8'>
                <h1 className='text-4xl font-bold'>
                Let's Create Something <span className='text-blue-700'> New Now!!! </span>
              </h1>
              <p className='text-xl'>
                Creating a new tech every day for you.Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Lorem ipsum dolor sit amet
                Creating a new tech every day for you.Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Lorem ipsum dolor sit amet
              </p>
              
              <label className="input input-bordered flex items-center gap-2 dark:bg-slate-700 dark:text-white daek:border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
              </label>
              <br/>

            </div>
                <div >
                    <Link to="/register"  type="submit" className=" mt-4 bg-blue-500 hover:bg-blue-800 duration-300 text-white font-bold py-2 px-4 rounded">SignUp</Link>
                </div>

            </div>


            <div className='order-1 w-full mt-6 md:w-1/2'>
            <img src={banner} className='w-3/4 mx-auto' />
            </div>
          
         </div>
    </>
  )
}

export default Banner;