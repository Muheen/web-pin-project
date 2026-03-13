import {ArrowUpRight} from 'lucide-react'

const leftText = () => {
  return (
    <div className='pl-20 pr-2 py-4 w-1/3 h-full'>

      <div className=' w-full py-4 flex justify-between flex-col'>
         <h1 className='font-bold text-5xl leading-14 mt-6'>
            Prospective Customer Segmentation
         </h1>
         <p className='mt-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nobis dicta sunt nostrum quos delectus voluptatem tenetur error. Ducimus iusto eum non culpa, nihil eaque saepe aut autem sed aliquam odio earum
         </p>
         <button className='mt-22'>
            <ArrowUpRight size={48} strokeWidth={2} />
         </button>

      </div>

    </div>
  )
}

export default leftText
