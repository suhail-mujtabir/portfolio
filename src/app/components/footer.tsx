"use client";

import Image from 'next/image';
export default function Footer() {
  return (
    <div>
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
                    <a target="_blank" href="https://github.com/suhail-mujtabir" className="social-icon-circle">
                      <Image src="/img/github.svg" alt="GitHub" width={20} height={20} />
                    </a>
                    <a target="_blank" href="https://www.facebook.com/suhail.mujtabir/" className="social-icon-circle">
                      <Image src="/img/facebook.svg" alt="Facebook" width={20} height={20} />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/suhail.mujtabir/" className="social-icon-circle">
                      <Image src="/img/instagram.svg" alt="Instagram" width={20} height={20} />
                    </a>
                    <a target="_blank" href="https://t.me/Suhail_Mujtabir" className="social-icon-circle">
                      <Image src="/img/telegram.svg" alt="Telegram" width={20} height={20} />
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
      
     
    </div>
  )
};
