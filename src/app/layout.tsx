// src/app/layout.tsx

import LayoutWrapper from './components/LayoutWrapper';
import Footer from './components/footer';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./styles";
import RipplesScript from './components/RipplesScript';
import Navbar from './components/Navbar';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suhail Mujtabir Fuad - Personal Website & Portfolio",
  description: "Suhail Mujtabir Fuad personal website and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Suhail Mujtabir Fuad" />
        <meta name="keywords" content="Wultyc, Welcome, Notebook, Welcome Notebook, Suhail Mujtabir Fuad," />
      </head>
      <body className={inter.className}> 
        <Navbar />
        <RipplesScript />
        <LayoutWrapper>
          {children}
          <Footer />
        </LayoutWrapper>
        
        {/* Vendor libraries: load before interactive scripts */}
        {/* Core libraries */}
        <Script
          src="https://code.jquery.com/jquery-3.6.1.min.js"
          integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />

        
        {/* Third-party libraries */}
        {/* <Script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js" strategy="beforeInteractive" /> */}
        <Script src="/js/tiny-slider.js" strategy="beforeInteractive" />
        {/* <Script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12" strategy="beforeInteractive" /> */}
        
        {/* Custom scripts - load after all libraries */}
        <Script src="/js/tiny-slider-init.js" strategy="afterInteractive" />
        <Script src="/js/mklb.js" strategy="afterInteractive" />
        <Script src="/js/counter.init.js" strategy="afterInteractive" />

      </body>
    </html>
  );
}