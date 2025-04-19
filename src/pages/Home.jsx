import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Commitment from '../components/Commitment';
import FAQ from '../components/Faq';
import Process from '../components/Process';
import ContactForm from '../components/Contact';
import Calendly from '../components/Calendly';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollUtils';


function Home() {
  const location = useLocation();

  useEffect(() => {
    // Check for section in state (from navigation) or hash (direct URL)
    const targetSection = location.state?.targetSection || location.hash;
    
    if (targetSection) {
      setTimeout(() => {
        scrollToSection(targetSection);
      }, 300);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero id="home"/>
        <About id="about"/>
        <Commitment id="commitment"/>
        <Process id="how-it-works"/>
        <FAQ id="faq"/>
        <Calendly />
        <ContactForm id="contact"/>
      </main>
      <Footer />
    </div>
  );
}

export default Home;