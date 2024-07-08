"use client"
import React, { useRef } from 'react'
import Cards from './Cards'
const Foreground = () => {
  // we used reference so that the cards can be constrained to the foreground
    const ref =useRef(null)
    
    const data=[
        {
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,hic.",
        filesize:"3mb",
        close:false,
        tag:{isOpen:true , tagTitle:"Download Now" , tagColor:"blue"}
        },
        {
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,hic.",
        filesize:"3mb",
        close:true,
        tag:{isOpen:false , tagTitle:"Download Now" , tagColor:"blue"}
        },
        {
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,hic.",
        filesize:"3mb",
        close:false,
        tag:{isOpen:true , tagTitle:"Download Now" , tagColor:"green"}
        },
    ];
  return (
    <>
   <div ref={ref}  className='w-full h-screen  fixed z-3 left-0 top-0 flex gap-10 p-5 flex-wrap'>

  {data.map((item,index)=>(
    <Cards data={item} reference={ref}/>
  ))}


 </div>
    
    
    </>
  )
}

export default Foreground