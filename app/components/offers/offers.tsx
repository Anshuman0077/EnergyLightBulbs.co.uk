import React from 'react'

export const Offers = () => {
  return (
   <div className='w-full px-18 flex '>
    <div className='px-3 flex'>
      <div className='border-2 border-border5 flex  flex-col items-center justify-center px-10 bg-bg1 rounded'>
       <span className='text-3xl text-text5 leading-6 tracking-tighter font-semibold'>
        Welcome to Energy Light Bulbs, your one stop shop for all your low energy bulbs.
       </span>
       <p className='text-md text-text4 tracking-tighter font-semibold  mt-6'> 
        In today's society the responsibility to help prevent climate change is on every individual. Everyone should play their part to try and prevent the pace in which the effects are taking place.
       </p>

      </div>

    </div>
          <div className=' w-full rounded'>
        <img src="https://doo9vxlv0gkqf.cloudfront.net/media/wysiwyg/image_Bill.png" 
        className='w-full h-full'
        alt="" />

      </div>
   </div>
  )
}
