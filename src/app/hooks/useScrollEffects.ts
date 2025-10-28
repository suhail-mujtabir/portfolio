import { useEffect } from 'react';

// Declare feather on the Window interface so TypeScript knows about it
declare global {
  interface Window {
    feather?: {
      replace?: () => void;
    };
  }
}

export function useScrollEffects() {
  useEffect(() => {
    let isFeatherInitialized = false;

    // Initialize feather icons
    const initFeather = () => {
      if (!isFeatherInitialized && typeof window !== 'undefined' && window.feather?.replace) {
        window.feather.replace();
        isFeatherInitialized = true;
      }
    };

    // Try to initialize feather immediately
    initFeather();

    // Menu sticky with debounce
    let stickyTimeout: NodeJS.Timeout;
    const windowScroll = () => {
      if (stickyTimeout) {
        clearTimeout(stickyTimeout);
      }
      
      stickyTimeout = setTimeout(() => {
        const navbar = document.getElementById("navbar");
        if (navbar) {
          if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
          ) {
            navbar.classList.add("nav-sticky");
          } else {
            navbar.classList.remove("nav-sticky");
          }
        }
      }, 10);
    };

    // Back-to-top functionality with debounce
    let backToTopTimeout: NodeJS.Timeout;
    const scrollFunction = () => {
      if (backToTopTimeout) {
        clearTimeout(backToTopTimeout);
      }

      backToTopTimeout = setTimeout(() => {
        const mybutton = document.getElementById("back-to-top");
        if (!mybutton) return;

        if (
          document.body.scrollTop > 500 ||
          document.documentElement.scrollTop > 500
        ) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }, 10);
    };

    // Smooth scroll implementation
    const smoothScrollTo = (to: number, duration: number) => {
      const element = document.scrollingElement || document.documentElement;
      const start = element.scrollTop;
      const change = to - start;
      const startDate = +new Date();
      
      const easeInOutQuad = (t: number): number => {
        t /= duration/2;
        if (t < 1) return change/2*t*t + start;
        t--;
        return -change/2 * (t*(t-2) - 1) + start;
      };

      const animateScroll = () => {
        const currentDate = +new Date();
        const currentTime = currentDate - startDate;
        element.scrollTop = parseInt(easeInOutQuad(currentTime).toString());
        if(currentTime < duration) {
          requestAnimationFrame(animateScroll);
        } else {
          element.scrollTop = to;
        }
      };
      animateScroll();
    };

    const topFunction = (e: Event) => {
      e.preventDefault();
      
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        smoothScrollTo(0, 500); // 500ms duration
      }
    };

    // Add event listeners
    window.addEventListener('scroll', windowScroll);
    window.addEventListener('scroll', scrollFunction);

    // Add click handler for back-to-top button
    const backToTop = document.getElementById("back-to-top");
    if (backToTop) {
      backToTop.addEventListener('click', topFunction);
    }

    // Initialize feather icons if available
    if (typeof window !== 'undefined' && window.feather?.replace) {
      window.feather.replace();
    }

    // Cleanup
    return () => {
      window.removeEventListener('scroll', windowScroll);
      window.removeEventListener('scroll', scrollFunction);
      if (backToTop) {
        backToTop.removeEventListener('click', topFunction);
      }
    };
  }, []); // Empty dependency array means this runs once on mount
}