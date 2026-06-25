'use client';

import { useEffect } from 'react';

import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import AmChartsMap from '@/components/AmChartsMap';
import HeroSection from '@/components/sections/home/HeroSection';
import VideoStripSection from '@/components/sections/home/VideoStripSection';
import AboutSection from '@/components/sections/home/AboutSection';
import ServicesSection from '@/components/sections/home/ServicesSection';
import ProductsSection from '@/components/sections/home/ProductsSection';
import LocationSection from '@/components/sections/home/LocationSection';
import ContactSection from '@/components/sections/home/ContactSection';

export default function Home() {
  useEffect(() => {
    // Inicializar iconos
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <>
      <Navbar />

      <HeroSection />

      <VideoStripSection />

      <AboutSection />

      <ServicesSection />

      <ProductsSection />

      <LocationSection />

      <ContactSection />

      <Footer />
    </>
  );
}
