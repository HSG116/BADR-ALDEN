import React from 'react';
import { Navbar } from '../components/sections/Navbar';
import { Hero } from '../components/sections/Hero';
import { Products } from '../components/sections/Products';
import { Features } from '../components/sections/Features';
import { Branches } from '../components/sections/Branches';
import { FAQ } from '../components/sections/FAQ';
import { ContactForm } from '../components/sections/ContactForm';
import { Footer } from '../components/sections/Footer';
import { BranchProvider } from '../context/BranchContext';

export default function Home() {
  return (
    <BranchProvider>
      <div className="min-h-screen bg-background overflow-x-hidden font-sans">
        <Navbar />
        <main>
          <Hero />
          <Products />
          <Features />
          <Branches />
          <ContactForm />
          <FAQ />
        </main>
        <Footer />
      </div>
    </BranchProvider>
  );
}
