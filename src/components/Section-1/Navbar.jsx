import React from 'react'
import { CornerDownRight } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='py-8 px-20 w-full flex justify-between items-center'>
        <h3 className='bg-gray-950 text-white px-4 py-1 rounded-4xl tracking-widest text-center'>
            Target Audience
        </h3>

        <h3 className='tracking-widest [word-spacing:8px] text-center flex '>
            <button className='mr-2'><CornerDownRight /></button>
            Digital Banking Platform 
        </h3>
    </div>
  )
}

export default Navbar
