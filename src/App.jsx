import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <footer className="border-t border-white/10 bg-black/80 py-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} me.ai — Your privacy-first AI persona platform.
      </footer>
    </div>
  );
}

export default App;
