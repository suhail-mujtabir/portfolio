// src/app/page.tsx
"use client";
import React from 'react';
import Image from 'next/image';

import BackToTop from './components/BackToTop';
import { useTyped } from './hooks/useTyped';

const Home: React.FC = () => {
  // Initialize Typed.js
  const typedRef = useTyped([
    "And I am passionate about learning!",
    "I love coding and technology!",
    "Welcome to my portfolio!"
  ], 90, 50, true);

  return (
    <div>

      <div id="home" className="hero-area position-relative bg-half-120 water" style={{ backgroundImage: 'url(/img/pdma.jpg)' }}>
        <div className="bg-overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 align-items-center text-center">
              <div className="title-heading mt-4 pb-60">
                <Image src="/img/mypic.jpg" alt="Profile picture" width={200} height={200} className="img-fluid rounded-circle" />
                <h1 className="heading font-36 text-white mt-4">Hello, I&apos;m Suhail Mujtabir Fuad</h1>
                <h6 className="designation mb-3 text-white">
                  {/* Replace the old Typed.js structure with this */}
                  <span style={{ color: 'springgreen' }} ref={typedRef}></span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  )
};

export default Home;