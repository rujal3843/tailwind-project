import React from 'react'
import { Link } from "react-router-dom";
import { VscListFilter } from "react-icons/vsc";


export const Navbar = () => {
  return (
    <div className='sticky top-0 z-50'>
        <div className="bg-black text-white flex justify-around  h-[50px] items-center">

        <Link to='/' className='hover:bg-white hover:text-black'> Home</Link>
        <Link to='/about' className='hover:bg-white hover:text-black' > About</Link>
        <Link to='/contact' className='hover:bg-white hover:text-black'> Contact</Link>
      </div>

      <div>
        <button>
          <VscListFilter size={30} />
        </button>
      </div>
    </div>
  )
}
