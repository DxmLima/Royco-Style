import React from 'react'
import { BrandGallery } from './brandgallery';

function Brands() {
  return (
    <main>
        <div className="text text-center mt-12">
                <h2 className='font-light uppercase text-[15px]'> Escolha uma Marca</h2>
        </div>
        <div className="gallery-brand flex justify-center items-center mt-12">
            <BrandGallery />
        </div>
    </main>
  )
}

export default Brands