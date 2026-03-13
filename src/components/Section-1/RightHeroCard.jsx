import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightHeroCard = (props) => {
  return (
    <div className="h-full rounded-4xl overflow-hidden shrink-0 relative w-60">
        <img className='h-full w-full object-cover' src={props.image} alt="img" />

        <div className='h-[70%] p-6 w-full absolute bottom-0 left-0 bg-linear-to-t from-black/90 to-transparent'></div>

         <div className='h-full p-6 w-full absolute top-0 left-0 flex flex-col justify-between'>

            <h3 className='text-xl bg-blue-500 w-8 h-8 flex justify-center items-center rounded-full'>1</h3>
            <div>
              <p className='text-l mb-10 text-white'>{props.intro}</p>

              <div className='flex items-center mb-2 text-white'>
                <button className='text-xl mr-4 bg-blue-500 pt-1 pb-2 px-4 rounded-3xl'>{props.tag}
                </button>
                <span className=' bg-blue-500 py-2 px-2 rounded-3xl'><ArrowRight  size={24} strokeWidth={1.5} /></span>
              </div>
            </div>

         </div>
      </div>
  )
}

export default RightHeroCard
