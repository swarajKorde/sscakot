import React from 'react'
import Image from 'next/image'
import logo from '../public/Panjabrao-Deshmukh.png'
function MiddleBar() {
  return (
    <>
    <div>
        <Image src={logo}
        width={500}
        height={500}/>


    </div>
    </>
  )
}

export default MiddleBar