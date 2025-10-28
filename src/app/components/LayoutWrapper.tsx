'use client';

import { useScrollEffects } from '@/app/hooks/useScrollEffects';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useScrollEffects();

  return (
    <>
      {children}
      <a href="#" className="btn btn-icon btn-soft-primary back-to-top" id="back-to-top">
        <i data-feather="arrow-up" className="icons"></i>
      </a>
    </>
  );
}