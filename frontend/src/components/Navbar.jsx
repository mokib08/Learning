import React from 'react'
import Navbar2 from './Navbar2'
import Footer from './Footer'

const Navbar = (props) => {
  return (
    <div className=' px-15 py-5 flex justify-between bg-emerald-700'>
        <h1 className='text-2xl'>{props.name}</h1>
        <Navbar2  />
        
    </div>
  )
}

export default Navbar