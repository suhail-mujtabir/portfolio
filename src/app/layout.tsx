import LayoutWrapper from './components/LayoutWrapper';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./styles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome",
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
      <body className={inter.className}> <LayoutWrapper>
        {children}</LayoutWrapper>
        {/* Vendor libraries: load before interactive scripts */}
        {/* Core libraries */}
        <Script
          src="https://code.jquery.com/jquery-3.6.1.min.js"
          integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <Script src="/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        
        {/* Third-party libraries */}
        <Script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js" strategy="beforeInteractive" />
        <Script src="/js/tiny-slider.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12" strategy="beforeInteractive" />
        
  {/* jQuery plugins - must load after jQuery */}
  <Script src="https://cdn.jsdelivr.net/npm/jquery.ripples@0.6.3/dist/jquery.ripples.min.js" strategy="beforeInteractive" />
        
        {/* Custom scripts - load after all libraries */}
        <Script src="/js/tiny-slider-init.js" strategy="afterInteractive" />
        <Script src="/js/mklb.js" strategy="afterInteractive" />
        <Script src="/js/counter.init.js" strategy="afterInteractive" />
        <Script src="/js/ripple.init.js" strategy="afterInteractive" />
        <Script src="/js/typed.init.js" strategy="afterInteractive" />
        <Script src="/js/switcher.js" strategy="afterInteractive" />
        <Script src="/js/app.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}