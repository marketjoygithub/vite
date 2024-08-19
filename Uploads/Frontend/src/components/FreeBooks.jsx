import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from 'react';
// import list from '../list.json';
import Cards from './Cards';
import axios from 'axios';


function FreeBooks() {
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
    const filterData = ser.filter((data) => data.category === "New");
    console.log(filterData)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
            <h1 className='font-semibold text-xl pb-2 '>Services we Offer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        
        <div className="slider-container">
        <Slider {...settings}>
            {filterData.map((item) => (
                <Cards item={item} key={item._id ||item.id}/>
                
                
            ))}
        
        </Slider>
    </div>
        
    </div>
    
    </>    
)
}

export default FreeBooks;