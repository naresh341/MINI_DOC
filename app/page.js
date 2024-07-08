"use client"
import Background from '@/Components/Background'
import Foreground from '@/Components/Foreground'
import React from 'react'

const page = () => {
  return (
    <>
     <div className='w-full h-screen bg-zinc-900 relative' >
     
       <Background/>
       <Foreground/>
    </div>

    </>
  )
}


export default page