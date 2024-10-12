import React from 'react'
import Image from "next/image"

import Woman from '@/public/Woman.jpg'

function CarouselHero () {
  return (
    <main className='flex justify-center items-center '> 
    <Image
      src={Woman}
      alt="Picture of the author"
      className='h-[800px] w-full bg-cover'
    />
    </main>
  )
}

export default CarouselHero;