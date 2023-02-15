import React, { useContext,useEffect } from 'react'
// import logo from '../images/logoo.png'
import ModeContext from '../contex/ModeContext'
import Link from 'next/link'
function Navbar() {
  const a = useContext(ModeContext);
 useEffect(() => {
  
     const token = localStorage.getItem('auth')
     
     if(token){
       a.setuser({value:token})
       
     }
   
 
 
 },[100])
 
  
  return (
    <div className={`${a.Mode === 'light' ? 'bg-yellow-400 text-black' : 'bg-purple-800 text-white'} md:flex md:justify-between shadow-xl shadow-green-400 -30`} >
      <div className='md:flex '>
        <img src='/images/logo.png' alt="aaa" className=' md:h-10 h-20 w-auto md:mx-0 m-auto  ' />
        <h1 className='m-auto md:ml-2 mx-28'>तमसो मा ज्योतीर्गामया </h1>
      </div>

      <ul className=' flex md:space-x-3 space-x-4 text-xl md:text-base p-1 justify-center bg-purple-400 md:bg-transparent'>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/contact'>Contact</Link></li>
        <li><Link href='/result'>Result</Link></li>
      </ul>
      <div className='space-x-1 mr-2 text-center flex justify-center md:relative absolute top-0 right-0'>
       {!a.user.value && <button className='bg-pink-500 text-white rounded-md px-2 my-1'><Link href='/login'>log in</Link></button>}
       {a.user.value  && <button className='bg-pink-500 text-white rounded-md px-2 my-1'><Link href='/login'>is</Link></button>}
        <button onClick={a.Change_Mode} className='bg-pink-500 text-white rounded-md px-2 my-1 right-0'>{a.btntxt}</button>
      </div>
    </div>
  )
}

export default Navbar