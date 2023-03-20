import React from 'react'
import { Footer } from '../Components/Footer';

import { Navbar } from '../Components/Navbar'
// import { FaApple } from 'react-icons/fa';
import Tech from './Tech';

export const Home = () => {
  return (
    <div>
      <div className='sticky top-0 '>

      <Navbar />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-1-1 md:grid-cols-2'>

        <div className='h-[400px] '>
          <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_kkflmtur.json" background="transparent" speed="1" loop autoplay></lottie-player>
        </div>


        <div className='mt-32 mr-10'>
          <p className='text-[30px] font-bold'>  Hi, i am John</p>
          <p className='text-red-500 '>Some Dev, freelance rounder</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perferendis nihil vitae incidunt et voluptatum minus, officiis libero! In eaque vitae corrupti optio ipsum maiores dolore, magnam iure minus quod dignissimos cupiditate cum excepturi numquam repellat eius deserunt. Officiis odio repellat, quis accusamus cum eum repudiandae ex adipisci illo aliquam.</p>
        </div>

      </div>



      <div>
        <Tech />
      </div>

      <p className='text-[30px] font-bold text-center'>Who am I</p>

      <div class=" mt-[50px] ml-[525px] w-[400px] h-[400px] bg-black text-white rounded-full grid justify-center items-center border-[4px] border-green-500 ">

        <div className=''>
          <p>Name:Rujal Shrestha</p>
          <p>Email:rujal@gmail.com</p>
          <p>Tel:1234567890</p>
          <p>Age:22</p>
          <p>Experience: pyhton,java,javascript</p>
        </div>
      

      </div>

<div className='mt-10'>

      <Footer />
      

</div>


    </div>
  )
}
