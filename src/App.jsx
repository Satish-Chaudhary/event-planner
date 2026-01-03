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
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="main-container">
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {!loading && (
        <SmoothScroll>
          <CustomCursor />
          <div className="noise-overlay" />

          <div className="content-wrapper">
            <Hero />
            <Philosophy />
            <SelectedWorks />
            <Services />
            <Team />
            <Reviews />
            <Footer />
          </div>
        </SmoothScroll>
      )}
    </main>
  );
}

export default App;
