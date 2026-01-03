import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import SelectedWorks from './components/SelectedWorks';
import Services from './components/Services';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import { Toaster } from 'react-hot-toast';
import './App.css';

import { Routes, Route, Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import PortalApp from './portal/PortalApp';

const LandingPage = () => (
  <SmoothScroll>
    <div className="content-wrapper">
      <CustomCursor />
      <div className="noise-overlay" />
      <Link to="/portal" className="portal-access-trigger">
        <ShieldCheck size={18} />
        <span>Portal</span>
      </Link>
      <Hero />
      <Philosophy />
      <SelectedWorks />
      <Services />
      <Team />
      <Reviews />
      <Footer />
    </div>
  </SmoothScroll>
);

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="main-container">
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {!loading && (
        <>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#C9A66B',
                color: '#0F0F0F',
                borderRadius: '8px',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '14px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                border: '1px solid rgba(234, 234, 234, 0.1)',
                padding: '16px 24px',
              },
            }}
          />

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/portal/*" element={<PortalApp />} />
          </Routes>
        </>
      )}
    </main>
  );
}

export default App;
