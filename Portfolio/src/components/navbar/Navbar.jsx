import React from 'react'
import { logo } from '../../assets'
import { navLinksdata } from '../../constants'
function Navbar() {
  return (
    <div  className='w-full h-20 mx-auto flex justify-between items-center'>
      <div>
        <img  src={logo} alt="icon"/>
      </div>
      <div>
        <ul className='flex items-center gap-10'>
        {
          
            navLinksdata.map((navv)=>{
                return(
                <li key={navv._id}>
                    {navv.title}
                </li>
                );
            })
            
        }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
