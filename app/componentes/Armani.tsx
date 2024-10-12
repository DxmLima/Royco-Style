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
    { src: 'https://armani.vtexassets.com/arquivos/ids/206134-462-650/8057970851707-PALETO_2.jpg?v=638453619829130000'
    , path: '', title: "Draper Washed Chambray", price: "£88" },
    { src: 'https://www.armani.com/variants/images/1647597339609113/D/w480.jpg',
         path: '/brands/emporio-armani', title:"Giorgio’s single-breasted", price: "$ 3,995" },
    { src: 'https://www.armani.com/variants/images/1647597313155642/D/w480.jpg', 
        path: '/brands/saint-laurent-paris', title:"ASV Giorgio’s ", price: "$ 5,750" },
    { src: 'https://www.armani.com/variants/images/1647597350241865/D/w480.jpg', 
        path: '/brands/acne-studios' , title:"Cashmere mock-neck jumper", price: "€ 990" },
    { src: 'https://www.armani.com/variants/images/1647597339608608/D/w480.jpg', 
        path: '/brands/ralph-lauren' , title:"Lucia Wool Blend", price: "£348" },
    { src: 'https://www.armani.com/variants/images/1647597339587029/D/w480.jpg', 
        path: '/brands/zegna' , title:"Devoré velvet cape ", price: "€ 1.500" },
    { src: 'https://www.armani.com/variants/images/1647597339585634/D/w480.jpg',
         path: '#' , title:"ASV crew-neck jumper", price: "€ 590" },
    { src: 'https://www.armani.com/variants/images/1647597339593100/D/w480.jpg', 
        path: '#', title:"Triple silk georgette shirt", price: "€ 2.100" },
 
  ];



export function ArmaniProduct() {
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
