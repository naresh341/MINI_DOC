import React from 'react'
import Background from './Component/Background'
import Foreground from './Component/Foreground'
import './App.css'

const page = () => {
  return (
    <>
     <div className='w-full h-screen bg-zinc-900 relative' >
     <Background></Background>
     <Foreground></Foreground>
    
    </div>

    </>
  )
}


export default page

