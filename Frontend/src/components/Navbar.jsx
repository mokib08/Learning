import React from 'react'
import Navbar2 from './Navbar2'

const Navbar = () => {
  return (
    <nav className='bg-emerald-900 flex py-5 px-10 justify-between'>
        <h2 className='text-2xl'>Sheryians</h2>
        <Navbar2 />
    </nav>
  )
}

export default Navbar