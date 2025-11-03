'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-md' : 'bg-white/70 shadow-sm'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image alt="star" src="/favicon-0.png" width={32} height={32} />
          <Image
            alt="logo"
            src="/mindsight-logo-inline.png"
            width={180}
            height={50}
            className="invert"
          />
        </div>
        <Link
          href="#cta"
          className="bg-mindsight-gradient hidden rounded-xl px-5 py-2 font-bold text-white transition-transform duration-300 hover:scale-105 md:inline-block"
        >
          Empieza tu camino
        </Link>
      </div>
    </header>
  );
};

export default Header;
