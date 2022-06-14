import React from 'react'
import Image from 'next/image'
import logo1 from '../images/pd.png'
import logo2 from '../images/logo.png'


function MiddleBar() {
  return (
    <>
    <div className='md:flex md:justify-between '>
       <Image src={logo1} height={360} className='rounded-br-full md:rounded-bl-none rounded-bl-full h- w-3'/>

        <p className='text-center w-96 text-xl m-auto'>
        Shri Shivaji Education Society,Amravati's Shri Shivaji Arts, Commerce & Science College, Akot, Maharashtra state - 444101 (Affiliated to Sant Gadge Baba Amravati University, Amravati) NAAC Re- accredited by Grade B++ with CGPA 2.95 (3rd Cycle)


        </p>
    <Image src={logo2} />

    </div>
    </>
  )
}

export default MiddleBar    