import React from 'react'
import  NavbarRoyco  from '@/app/componentes/navbar';
import Image from "next/image"
import Woman2 from '@/public/Woman2.jpg'
import { CarouselBrand } from './../componentes/brandcarousell';




function page() {
  return (
    <div>
        <NavbarRoyco />
        <div className="banner">
                    <Image
                src={Woman2}
                alt="Picture of the author"
                className='h-auto w-full bg-cover'
                />
        </div>
            <div className="marcas mt-12 flex justify-center items-center">
                    <h1 className='text-[40px] font-semibold'> Marcas</h1>
            </div>
                <div className="centerthis flex justify-center items-center mt-6">
                    <CarouselBrand />
                </div>
    </div>
  )
}

export default page