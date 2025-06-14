import React from 'react'

export const CategoryData = () => {
  return (
   <div>
    <div className='w-full text-black px-10 font-bold'>
       <ul className='w-full flex space-x-10 '>
        <li>Halogen Bulbs</li>
        <li>Energy Saving Compact Fluorescent</li>
        <li>Low Voltage Bulbs</li>
        <li>Incendescent</li>
        <li>Sodium</li>
        <li>Decordation LED Bulbs</li>
        <li>LED Panel</li>
        <li>Fire Rated Down Lights</li>
        <li>Celing Down Lights</li>
        <li>Cabinet/UnderSelf Lighting</li>
        <li>Transforms / LED Drivers</li>
       </ul>
    </div>
    <div>
        <ul className='text-black'>
            <li>
                <div>Img</div>
                <div>Name</div>
            </li>
        </ul>
    </div>
   </div>
  )
}
