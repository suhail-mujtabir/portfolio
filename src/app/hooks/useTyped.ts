// src/app/hooks/useTyped.ts
"use client";
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export function useTyped(strings: string[], typeSpeed: number = 90, backSpeed: number = 50, loop: boolean = true) {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      const options = {
        strings: strings,
        typeSpeed: typeSpeed,
        backSpeed: backSpeed,
        loop: loop,
        showCursor: true,
        cursorChar: '|'
      };

      typed.current = new Typed(el.current, options);

      return () => {
        if (typed.current) {
          typed.current.destroy();
        }
      };
    }
  }, [strings, typeSpeed, backSpeed, loop]);

  return el;
}