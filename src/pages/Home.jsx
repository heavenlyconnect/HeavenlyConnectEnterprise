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


function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Commitment />
        <Process />
        <FAQ />
        <Calendly />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default Home;