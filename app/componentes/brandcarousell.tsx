import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


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



export function CarouselBrand() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
