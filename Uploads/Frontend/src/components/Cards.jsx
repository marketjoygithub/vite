import React from 'react'
import Bannerimg from '../assets/Bannerimg2.png'

function Cards({item}) {
    console.log(item)
  return (
    <>
    <div className='mt-4 my-3 p-3' >
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 transition-transform duration-100 dark:bg-slate-900 dark:text-white dark:border ">  
            <figure>
                <img
                src={Bannerimg}
                alt="Our Services" />
            </figure>
            <div className="card-body flex ">
                <h2 className="card-title">
                { item.name }
                <div className="badge badge-secondary">{ item.category }</div>
                </h2>
                <p>{item.title}</p>
                <div className="card-actions justify-between">
                <div className="badge badge-outline">${item.price}</div>
                <div className="badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer ">Click to Know More..</div>
                </div>
            </div>
        </div>
    </div>
    </>

  )
}

export default Cards;