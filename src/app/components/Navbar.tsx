"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    // Handle the base path separately
    if (path === '/' && pathname === '/') {
      return 'nav-link nuxt-link-exact-active nuxt-link-active';
    }
    // For other paths, check if the pathname starts with the link's path
    if (path !== '/' && pathname.startsWith(path)) {
      return 'nav-link nuxt-link-exact-active nuxt-link-active';
    }
    return 'nav-link';
  };

  return (
    <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky">
      <div className="container">
        <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>
          <Image src="/img/dr1.jpg" alt="Profile" width={48} height={48} style={{ borderRadius: '50%' }} />
        </Link>
        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
        >
          <span className="mdi mdi-menu">
            <Image src="/img/bars-solid.svg" alt="Menu" width={30} height={20} />
          </span>
        </button>
        <div id="navbarCollapse" className="collapse navbar-collapse navigation">
          <ul id="navbar-navlist" className="navbar-nav navbar-nav-link ms-auto">
            <li className="nav-item">
              <Link href="/" aria-current={pathname === '/' ? 'page' : undefined} className={getLinkClass('/')}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" aria-current={pathname === '/about' ? 'page' : undefined} className={getLinkClass('/about')}>
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/404" aria-current={pathname === '/portfolio' ? 'page' : undefined} className={getLinkClass('/portfolio')}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" aria-current={pathname === '/blog' ? 'page' : undefined} className={getLinkClass('/blog')}>
                My Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/404" aria-current={pathname === '/contact' ? 'page' : undefined} className={getLinkClass('/contact')}>
                Contact
              </Link>
            </li>
          </ul>
          <ul className="top-right text-right list-unstyled list-inline mb-0 mt-2 mt-sm-0 nav-social">
            <li className="list-inline-item me-2">
              <a href="https://www.facebook.com/suhail.mujtabir/" target="_blank" rel="noreferrer">
                <Image src="/img/facebook.svg" alt="Facebook" width={30} height={20} />
              </a>
            </li>
            <li className="list-inline-item me-2">
              <a href="https://www.instagram.com/suhail.mujtabir/" target="_blank" rel="noreferrer">
                <Image src="/img/instagram.svg" alt="Instagram" width={30} height={20} />
              </a>
            </li>
            <li className="list-inline-item me-2">
              <a href="https://t.me/Suhail_Mujtabir" target="_blank" rel="noreferrer">
                <Image src="/img/telegram.svg" alt="Telegram" width={30} height={20} />
              </a>
            </li>
            <li className="list-inline-item me-2">
              <a href="https://github.com/suhail-mujtabir" target="_blank" rel="noreferrer">
                <Image src="/img/github.svg" alt="GitHub" width={30} height={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;