import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProductsSection from '@/components/ProductsSection';
import ClothingSection from '@/components/ClothingSection';
import PlansSection from '@/components/PlansSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import PartnersSection from '@/components/PartnersSection';

const Index = () => {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Trava o scroll da página
    document.body.style.overflow = "hidden";
    
    // Smooth scroll implementation with reduced offset for tighter sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        window.scrollTo({
          top: targetElement.offsetTop - 70, // Reduced offset for tighter layout
          behavior: 'smooth'
        });
      });
    });

    // Load MonteSite badge script
    const script = document.createElement('script');
    script.src = 'https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe';
    script.async = true;
    document.body.appendChild(script);
    scriptRef.current = script;

    // Clean up event listeners and script
    return () => {
      document.body.style.overflow = "auto";
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
        });
      });
      if (scriptRef.current) {
        document.body.removeChild(scriptRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <ClothingSection />
        <PlansSection />
        <TestimonialsSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <div id="montesite-footer-badge" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999 }}></div>
    </div>
  );
};

export default Index;
