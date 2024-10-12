import * as React from "react"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

import Image from "next/image"
import Link from "next/link"



//  Thanks to  https://worldvectorlogo.com 

const brands = [
    { src: '/Logos/REISS.svg', path: '/brands/reiss' },
    { src: '/Logos/EmporioArmani.svg', path: '/brands/emporio-armani' },
    { src: '/Logos/SaintLaurentParis.svg', path: '/brands/saint-laurent-paris' },
    { src: '/Logos/AcneStudios.svg', path: '/brands/acne-studios' },

   
  ];



export function BrandGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-6">
    {brands.map((brand, index) => (
      <Link href={brand.path} key={index}>
        <Card className="mt-6 mb-6 mr-4 cursor-pointer hover:bg-slate-50 ">
          <CardContent className="flex justify-center items-center m-4 h-[150px] w-[200px]">
            <Image
              src={brand.src}
              width={140}
              height={140}
              alt="Brand image"
              className="m-2"
            />
          </CardContent>
        </Card>
      </Link>
    ))}
  </div>
  )
}
