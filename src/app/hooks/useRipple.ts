// src/app/hooks/useRipple.ts
"use client";
import { useEffect, RefObject } from 'react';

export function useRipple(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const createRipple = (event: MouseEvent) => {
      const button = event.currentTarget as HTMLElement;
      const circle = document.createElement('span');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      const rect = button.getBoundingClientRect();
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - rect.left - radius}px`;
      circle.style.top = `${event.clientY - rect.top - radius}px`;
      circle.classList.add('ripple');

      const existingRipples = button.getElementsByClassName('ripple');
      if (existingRipples.length > 0) {
        existingRipples[0].remove();
      }

      button.appendChild(circle);
    };

    element.addEventListener('click', createRipple);

    return () => {
      element.removeEventListener('click', createRipple);
    };
  }, [ref]);
}