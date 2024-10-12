import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"



//  Thanks to  https://worldvectorlogo.com 

const brands = [
    { src: '/Logos/REISS.svg', path: '/brands/reiss' },
    { src: '/Logos/EmporioArmani.svg', path: '/brands/emporio-armani' },
    { src: '/Logos/SaintLaurentParis.svg', path: '/brands/saint-laurent-paris' },
    { src: '/Logos/AcneStudios.svg', path: '/brands/acne-studios' },
    { src: '/Logos/RalphLauren.svg', path: '/brands/ralph-lauren' },
    { src: '/Logos/Zegna.svg', path: '/brands/zegna' },
    { src: '/Logos/Prada.svg', path: '/brands/prada' },
    { src: '/Logos/VeronicaBeard.svg', path: '/brands/veronica-beard' },
    { src: '/Logos/Gucci.svg', path: '/brands/gucci' },
    { src: '/Logos/RayBan.svg', path: '/brands/ray-ban' },
    { src: '/Logos/HugoBoss.svg', path: '/brands/hugo-boss' }, 
   
    { src: '/Logos/IWC.svg', path: '/brands/iwc' },
    { src: '/Logos/JCrew.svg', path: '/brands/jcrew' },
    { src: '/Logos/MichaelKorns.svg', path: '/brands/michael-kors' },
    { src: '/Logos/Sandro.svg', path: '/brands/sandro' },
    { src: '/Logos/Celine.svg', path: '/brands/celine' },
    { src: '/Logos/ColeHaan.svg', path: '/brands/cole-haan' },
    { src: '/Logos/barbour.svg', path: '/brands/barbour' },
    { src: '/Logos/MaxMara.svg', path: '/brands/max-mara' },
    { src: '/Logos/Lafayette.svg', path: '/brands/lafayette' },
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
