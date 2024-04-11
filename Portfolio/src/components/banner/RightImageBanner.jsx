import React from 'react'
import { bannerImg } from '../../assets';

function RightImageBanner() {
  return (
    <div>
       <div className=' w-full bg-red-400  flex  justify-center items-center  '>
            <img  
            className=' w-[500px]  h-[680px] z-10'
             src={bannerImg} alt='bannerimage'
             />
        </div>
    </div>
  )
}

export default RightImageBanner
