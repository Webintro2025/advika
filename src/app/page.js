import Image from "next/image";
import Services from "@/components/Services";
import Classification from "@/components/Classification";
import Testimonial from "@/components/Testimonial";
import HomeBanner from "@/components/HomeBanner";
import About from "@/components/About";
import WhyUnique from "@/components/WhyUnique";
import OurProducts from "@/components/OurProducts";
import GetInTouch from "@/components/GetInTouch";
import Map from "@/components/Map";
import Million from "@/components/Million";
export default function Home() {
  return (
   <div>
    <HomeBanner />
    <OurProducts />
    <Million />
   
    <Testimonial />
    

    <WhyUnique />
      <GetInTouch />
      <Map />

    </div>
  );
}
