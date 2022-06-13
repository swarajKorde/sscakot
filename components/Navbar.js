import React from 'react'
import logo from '../public/images/logo.png'
function Navbar() {
  return (
    <div className='bg-yellow-400 flex md:justify-center'>
    <img src={logo} alt=""  className='w-auto'/>
    
    <ul className=' flex space-x-3 p-1'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Result</li>
    </ul>
    <div className='space-x-1 absolute right-1'>
    <button className='bg-pink-500 text-white rounded-md px-2 my-1'>Log in</button>
    <button className='bg-pink-500 text-white rounded-md px-2 my-1  '>Mode</button>
    </div>
    </div>
  )
}

export default Navbar