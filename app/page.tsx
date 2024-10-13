
import { Alexandria } from 'next/font/google'
import NavbarRoyco from './componentes/navbar';
import CarouselHero from './componentes/sliderimg';
import Brands from "./componentes/brands";


const alexandria = Alexandria({ subsets: ['latin'] })
export default function Home() {
  return (
    <main  className={alexandria.className}>
      <NavbarRoyco />
      <CarouselHero />
      <Brands />
    </main>
  );
}
