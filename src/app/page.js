import Image from "next/image";
import Services from "@/components/Services";
import Classification from "@/components/Classification";
import Testimonial from "@/components/Testimonial";
import HomeBanner from "@/components/HomeBanner";
import About from "@/components/About";
import WhyUnique from "@/components/WhyUnique";
export default function Home() {
  return (
   <div>
    <HomeBanner />
    <Services />
    <About />
    <Classification />
    <Testimonial />

    <WhyUnique />

    </div>
  );
}
