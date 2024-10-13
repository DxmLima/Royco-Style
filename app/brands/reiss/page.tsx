import React from 'react'
import NavbarRoyco from './../../componentes/navbar';
import Image from 'next/image';
import BannerReiss from '@/public/Banner/BannerReiss.png'


import { ReissProduct } from './../../componentes/Reiss';

function Reiss() {
  return (
    <>
      <NavbarRoyco />

      <div className="banner">
          <Image
          src={BannerReiss}
          alt="Picture of the author"
          className='h-[300px] w-full bg-cover'
        />
      </div>

      <div className="Products">
          <ReissProduct />
      </div>
    </>
  )
}

export default Reiss