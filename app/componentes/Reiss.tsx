import * as React from "react"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

import Image from "next/image"
import Link from "next/link"




//  Thanks to  https://worldvectorlogo.com 

const brands = [
    { src: 'https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/U30649s.jpg'
    , path: '', title: "Draper Washed Chambray", price: "£88" },
    { src: 'https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/676535s.jpg',
         path: '/brands/emporio-armani', title:"Gable Wool Blend", price: "£328" },
    { src: 'https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/E08152s.jpg', 
        path: '/brands/saint-laurent-paris', title:"Gable Wool Blend", price: "£328" },
    { src: 'https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/707350s.jpg', 
        path: '/brands/acne-studios' , title:"Belmont Slim Fit", price: "£348" },
    { src: 'https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/E13754s.jpg', 
        path: '/brands/ralph-lauren' , title:"Lucia Wool Blend", price: "£348" },
    { src: 'https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/AC1004s.jpg', 
        path: '/brands/zegna' , title:"Dahlia Knitted ", price: "£398" },
    { src: 'https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/E61244s.jpg',
         path: '/brands/prada' , title:"Vesta Knitted", price: "£168" },
    { src: 'https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/E55277s.jpg', 
        path: '/brands/veronica-beard', title:"Paula Hybrid", price: "£228" },
 
  ];



export function ReissProduct() {
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
