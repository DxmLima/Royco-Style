import React from 'react'
import NavbarRoyco from './../../componentes/navbar';
import Image from 'next/image';
import BannerAcne from '@/public/Banner/BannerAcneStudios.png'
import { Products } from './../../componentes/Products';
function page() {
  return (
    <>
      <NavbarRoyco />

      <div className="banner">
          <Image
          src={BannerAcne}
          alt="Picture of the author"
          className='h-[300px] w-full bg-cover'
        />
      </div>

      <div className="Products">
           <Products />
      </div>
    </>
  )
}

export default page