import React, { useContext } from 'react'
import ModeContext from '../contex/ModeContext'



function MiddleBar() {

  const a =useContext(ModeContext)
  return (
    
    <div className={`md:flex  justify-between ${a.Mode ==='light'?'bg-orange-400 text-black':'bg-slate-700 text-white'} `}>
   
        <img src="/images/pd.png" alt="" className={`h-96  rounded-br-full md:rounded-bl-none rounded-bl-full ${a.Mode ==='light'?'bg-slate-700':'bg-red-600'} md:w-auto w-screen pt-2 md:px-0 px-1 sm:w-screen  md:96 `}/>
    
      <div className='sm:sr-only md:not-sr-only'>
        <p className='md:text-2xl text-xl md:p-2 mt-4 text-center md:mt-20 md:w-fit md:border-none border-t-2 border-t-black '>Shri Shivaji Education Society,Amravati's Shri Shivaji Arts, Commerce & Science College, Akot, Maharashtra state - 444101 (Affiliated to Sant Gadge Baba Amravati University, Amravati) NAAC Re- accredited by Grade B++ with CGPA 2.95 (3rd Cycle)

        </p>
      </div>
   
        <img src="/images/logo.png" alt="" className='h-96 md:w-auto w-screen sm:fit md:96' />
      
    </div>

  )
}

export default MiddleBar    