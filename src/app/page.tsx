import Image from "next/image";
import { ImagesSliderDemo } from "@/components/ImagesSliderDemo";
import OurServices from "@/components/OurServices";
import HeroSection from "@/components/HeroSection";
import VisionTabs from "@/components/VisionTabs";
import Vide from "@/components/vide";
import MachinesCarousel from "@/components/MachinesCarousel";
import { WorldMapDemo } from "@/components/WorldMapDemo";
export default function Home() {
  return (
   <>
      <ImagesSliderDemo/>
   
    <HeroSection/>
    <OurServices/>
    <VisionTabs/>
    <Vide/>
<MachinesCarousel/>
<WorldMapDemo/>
    </>
  );
}
