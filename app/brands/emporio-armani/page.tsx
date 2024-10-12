import React from 'react'
import NavbarRoyco from './../../componentes/navbar';
import Image from 'next/image';
import BannerArmani from '@/public/Banner/BannerArmani.png'
import { ArmaniProduct } from './../../componentes/Armani';




function Armani() {
  return (
    <>
      <NavbarRoyco />

      <div className="banner">
          <Image
          src={BannerArmani}
          alt="Picture of the author"
          className='h-[300px] w-full bg-cover'
        />
      </div>

      <div className="Products">
          <ArmaniProduct />
      </div>
    </>
  )
}

export default Armani