import { CardHoverEffectDemo } from "@/components/CardHover";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import { InfiniteMovingCardsDemo } from "@/components/MovingCard";
import { NavbarDemo } from "@/components/Navbar";
import StickyComp from "@/components/StickyComp";
import { WavyBackgroundDemo } from "@/components/WavyComponent";

export default function Home() {
  return (
    <main className="flex flex-col">
      <NavbarDemo />
      <Main />
      <Feature />
      <StickyComp />
      <InfiniteMovingCardsDemo />
      <CardHoverEffectDemo />
      <WavyBackgroundDemo />
      <Footer/>
    </main>
  );
}
