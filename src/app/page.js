import HeroSection from "@/components/home/HeroSection";
import Faqs from "@/components/home/Faqs";
import Testimonial from "@/components/home/Testimonial";
import Join from "@/components/home/Join";
import PrimeServices from "@/components/home/PrimeServices";
import FeaturedOfficeSpace from "@/components/home/FeaturedOfficeSpace";
import ExploreMayfair from "@/components/home/ExploreMayfair";
import ScrollTop from "@/components/layout/ScrollTop"
import Chat from "@/components/layout/Chat";
export default function Home() {
  return (
    <>
      <ScrollTop />
      <Chat />
      <HeroSection />
      <ExploreMayfair />
      <FeaturedOfficeSpace />
      <PrimeServices />
      <Faqs />
      <Testimonial />
      <Join />
    </>
  );
}
