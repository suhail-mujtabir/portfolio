"use client";
import React from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div id="home" className="hero-area position-relative bg-half-120" style={{ backgroundImage: 'url(/img/pdma.jpg)' }}>
        <div className="bg-overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 align-items-center text-center">
              <div className="title-heading mt-4 pb-60">
                <Image src="/img/mypic.jpg" alt="Profile picture" width={200} height={200} className="img-fluid rounded-circle" />
                <h1 className="heading font-36 text-white mt-4">Hello, I&apos;m Suhail Mujtabir Fuad</h1>
                <h6 className="designation mb-3 text-white">
                  <span id="TypedData" data-elements="And I am passionate about learning!" className="element"></span>
                  <span style={{ color: 'springgreen' }} id="typed"></span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <footer className="footer bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <a href="#" className="footer-logo text-black">
                  Social Media
                </a>
                <p className="para-desc mx-auto mt-5 text-black">Find me on social media</p>
                <ul className="list-unstyled mb-0 mt-4 social-icon">
                  <li className="list-inline-item me-1">
                    <a target="_blank" href="https://github.com/suhail-mujtabir" className="rounded-circle">
                      <Image src="/img/github.svg" alt="GitHub" width={16} height={16} />
                    </a>
                    <a target="_blank" href="https://www.facebook.com/suhail.mujtabir/" className="rounded-circle">
                      <Image src="/img/facebook.svg" alt="Facebook" width={16} height={16} />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/suhail.mujtabir/" className="rounded-circle">
                      <Image src="/img/instagram.svg" alt="Instagram" width={16} height={16} />
                    </a>
                    <a target="_blank" href="https://t.me/Suhail_Mujtabir" className="rounded-circle">
                      <Image src="/img/telegram.svg" alt="Telegram" width={16} height={16} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <footer className="footer footer-bar bg-black">
          <div className="container text-foot text-center">
            <p className="mb-0 text-white-50">&copy; Suhail Mujtabir Fuad.</p>
          </div>
        </footer>
      </div>
      <a href="#" className="btn btn-icon btn-soft-primary back-to-top">
        <i data-feather="arrow-up" className="icons"></i>
      </a>
    </div>
  );
};

export default Home;