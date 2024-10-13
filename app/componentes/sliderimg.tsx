import React from 'react'
import Image from "next/image"

import Woman from '@/public/Woman.jpg'
import MobileView from '@/public/MobileView.png'

function CarouselHero () {
  return (
    <main className='flex justify-center items-center '> 
    <Image
      src={Woman}
      alt="Picture of the author"
      className='h-[800px] w-full bg-cover invisible md:visible'
    />

<Image
      src={MobileView}
      alt="Picture of the author"
      className='h-[600px] w-auto bg-cover visible md:invisible absolute mb-6'
    />
      
    </main>
  )
}

export default CarouselHero;