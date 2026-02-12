import BestSeller from "@/components/home/BestSeller";
import CTASection from "@/components/home/CTASection";
import ChooseSection from "@/components/home/ChooseSection";
import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import PopularProducts from "@/components/home/PopularProducts";
import React from "react";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Homepage = () => {
  return (
    <main>
      <HeroSection />
      <ChooseSection />
      <PopularProducts />
      <BestSeller />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </main>
  );
};

export default Homepage;
