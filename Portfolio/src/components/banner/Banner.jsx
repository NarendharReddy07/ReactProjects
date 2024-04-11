import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import LeftIntroBanner from './LeftIntroBanner';
import RightImageBanner from './RightImageBanner';
//import { bannerImg } from '../../assets';


function Banner() {
 
  return (
  <div>
    <section id="home" className=' w-full  pt-10 pb-20 h-[800px] pb-20 flex  border-b-[1px]   font-titleFont border-b-black '>
        <div className=' w-1/2 flex flex-col gap-20'>
           <LeftIntroBanner />
          <div>
            <h2 className=' text-base uppercase font-titleFont mb-4'> Find me in</h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
              <span className="bannerIcon">
                <FaTwitter />
              </span>
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </div>
          </div>
        </div>
        {/* <div className=' w-1/2  flex  justify-center items-center '>
            <img  
            className=' w-[500px]  h-[680px] z-10'
             src={bannerImg} alt='bannerimage'
             />
        </div> */}
        <RightImageBanner />

       
      
    </section>
  </div>
  )
}

export default Banner
