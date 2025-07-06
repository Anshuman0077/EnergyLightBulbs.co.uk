

import React from 'react'
import DesktopAccount from './DesktopAccount'
import MobileAccount from './MobileAccount'



export default function AccountDropdownWrapper() {
  return (
    <>
     <div className='md:hidden'>
       <MobileAccount />
     </div>

     <div className='hidden md:block'>
       <DesktopAccount />
     </div>
      
    </>
  )
}
