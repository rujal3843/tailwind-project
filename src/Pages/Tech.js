import React from 'react'
import { FaCss3, FaJava, FaPhp, FaPython, FaReact, FaSwift } from 'react-icons/fa';
const Tech = () => {
  return (
    <div>

      <p className='text-center font-bold text-[30px] '>Technology I use</p>

      {/* <div className='p-10 grid grid-cols-4 gap-16 justify-items-center md:grid-cols-2  '>
        <FaReact size={150} className='hover:scale-125 hover:text-rose-400 duration-200' />
        <FaPython size={150} />
        <FaPhp size={150} />
        <FaJava size={150} className='animate-bounce' />
        <FaCss3 size={150} />
        <FaSwift size={150} />
      </div> */}
      <div className='p-10 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-16 justify-items-center'>
        <FaReact size={150} className='hover:scale-125 hover:text-rose-400 duration-200' />
        <FaPython size={150} />
        <FaPhp size={150} />
        <FaJava size={150} className='animate-bounce' />
        <FaCss3 size={150} />
        <FaSwift size={150} />
      </div>


    </div>


  )
}

export default Tech