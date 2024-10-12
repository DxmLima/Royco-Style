import * as React from "react"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

import Image from "next/image"
import Link from "next/link"
import { title } from "process";



//  Thanks to  https://worldvectorlogo.com 

const brands = [
    { src: 'https://www.acnestudios.com/dw/image/v2/AAXV_PRD/on/demandware.static/-/Sites-acne-product-catalog/default/dwbf181cc1/images/BB/BB0592-/2000x/BB0592-100_A.jpg?sw=2000&sh=3000'
    , path: 'https://www.acnestudios.com/us/en/short-sleeve-button-up-shirt-white/BB0592-100.html?g=man', title: "Short sleeve button-up shirt", price: "$380" },
    { src: 'https://www.acnestudios.com/dw/image/v2/AAXV_PRD/on/demandware.static/-/Sites-acne-product-catalog/default/dw915288ea/images/CI/CI0172-/2000x/CI0172-AA3_A.jpg?sw=2000&sh=3000',
         path: '/brands/emporio-armani', title:"Printed t-shirt", price: "$350" },
    { src: 'https://www.acnestudios.com/dw/image/v2/AAXV_PRD/on/demandware.static/-/Sites-acne-product-catalog/default/dw3975364e/images/CL/CL0299-/2000x/CL0299-183_A.jpg?sw=2000&sh=3000', 
        path: '/brands/saint-laurent-paris', title:"Sweater Face logo - Regular fit", price: "$380" },
    { src: 'https://www.acnestudios.com/dw/image/v2/AAXV_PRD/on/demandware.static/-/Sites-acne-product-catalog/default/dwdd71297f/images/BB/BB0601-/2000x/BB0601-900_A.jpg?sw=2000&sh=3000', 
        path: '/brands/acne-studios' , title:"Printed button-up shirt", price: "$620" },
    { src: 'https://www.acnestudios.com/dw/image/v2/AAXV_PRD/on/demandware.static/-/Sites-acne-product-catalog/default/dw4418bca7/images/CL/CL0196-/2000x/CL0196-BM0_UNISEX-WOMAN_A.jpg?sw=2000&sh=3000', 
        path: '/brands/ralph-lauren' , title:"Logo t-shirt", price: "$340" },
    { src: 'https://www.acnestudios.com/dw/image/v2/AAXV_PRD/on/demandware.static/-/Sites-acne-product-catalog/default/dw9b259712/images/AL/AL0421-/2000x/AL0421-DJO_A.jpg?sw=2000&sh=3000', 
        path: '/brands/zegna' , title:"Layered print t-shirt", price: "$440" },
    { src: 'https://www.acnestudios.com/dw/image/v2/AAXV_PRD/on/demandware.static/-/Sites-acne-product-catalog/default/dw0bb46bf3/images/CL/CL0262-/2000x/CL0262-900_UNISEX-WOMAN_A.jpg?sw=2000&sh=3000',
         path: '/brands/prada' , title:"Logo t-shirt", price: "$380" },
    { src: 'https://www.acnestudios.com/dw/image/v2/AAXV_PRD/on/demandware.static/-/Sites-acne-product-catalog/default/dw395c6d56/images/AC/AC0706-/2000x/AC0706-900_A.jpg?sw=2000&sh=3000', 
        path: '/brands/veronica-beard', title:"Fringe wrap blouse", price: "$540" },
 
  ];



export function Products() {
  return (
   <div className="centerthis flex justify-center items-center">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
    {brands.map((brand, index) => (
      <Link href={brand.path} key={index}>
        <Card className="mt-6 mb-6 mr-4  hover:bg-slate-50 h-[450px] w-[300px] ">
          <CardContent className="flex justify-center items-center m-4 ">
            <Image
              src={brand.src}
              width={250}
              height={350}
              alt="Brand image"
              className="flex justify-center items-center"
            />
          </CardContent>
          <CardFooter>
        <h1 className="text-[15px] font-semibold mb-2">{brand.title} <br />  <span className="font-bold">{brand.price}</span> </h1> 
        </CardFooter>
          
        </Card>
      </Link>
    ))}
  </div>
   </div>
  )
}
