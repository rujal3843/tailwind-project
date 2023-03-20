import React from 'react'
import { Footer } from '../Components/Footer'
import { Navbar } from '../Components/Navbar'

export const About = () => {
  return (
    <div>

      <div className='sticky top-0'>
        <Navbar />
      </div>

      <div className='ml-20 mt-[60px]'>
        <p className='text-[30px]'>About us</p>
        <p className='mt-6 mr-10 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae harum odio aspernatur? Sed totam ipsa labore quidem doloremque numquam, quos quas beatae modi possimus at, recusandae unde doloribus animi aliquam blanditiis alias suscipit magnam optio deserunt laboriosam repellat nulla dignissimos. Animi inventore reprehenderit quis, nesciunt commodi eos obcaecati maiores eveniet asperiores voluptatum aliquam quae repellendus dolore rem nam voluptate quibusdam nemo et error. Quasi, repellendus earum placeat culpa fugiat molestiae voluptatum quae vel delectus distinctio dicta, nam voluptates, vero eius voluptatibus beatae aliquam nisi alias illum sequi iure laborum nulla! Quisquam, cumque impedit officia tenetur hic autem dolores fugiat in sequi odit fugit asperiores inventore odio, minima dolor est enim voluptatum eos laboriosam iusto soluta praesentium laborum consequatur. Magni architecto fugit quis consequuntur ullam quam, rerum, nobis voluptas sed fuga, animi deserunt accusantium illum quo commodi deleniti vel ea soluta harum adipisci natus. Culpa ad laborum doloremque atque aspernatur tempora voluptatem quasi amet porro, sapiente labore harum assumenda doloribus eos iure, facilis praesentium et tenetur recusandae suscipit unde sit. Illo recusandae magni perspiciatis velit sint. Velit, laudantium? Doloribus unde id natus eos nihil eaque eius pariatur veniam! Omnis, numquam, fugit sed consectetur provident magni dignissimos quas reiciendis excepturi quos quo.</p>
      </div>


      <div className='mt-36'>
        <Footer />
      </div>

      <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,256L1440,128L1440,320L0,320Z"></path>
</svg>
      </div>

    </div>
  )
}
