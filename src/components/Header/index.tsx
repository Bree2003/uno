'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button'; // 1. Importamos nuestro componente Button

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Se activa el efecto cuando el scroll es mayor a 10px
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 
        // 2. Aumentamos el desenfoque y ajustamos la opacidad del fondo
        backdrop-blur-lg 
        ${scrolled ? 'bg-white/80 shadow-md' : 'bg-white/30'}`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" aria-label="Volver al inicio" className="flex items-center space-x-2">
          <Image alt="star" src="/favicon-0.png" width={32} height={32} />
          <Image
            alt="logo"
            src="/mindsight-logo-inline.png"
            width={180}
            height={50}
            className="invert" // Asegúrate que 'invert' se vea bien con el nuevo fondo
          />
        </Link>

        {/* 3. Nuevos enlaces de navegación (visibles en pantallas medianas y grandes) */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#comunidad" className="font-semibold text-mindsight-accent-secondary transition-colors hover:text-mindsight-accent">
            Comunidad
          </Link>
          <Link href="#beneficios" className="font-semibold text-mindsight-accent-secondary transition-colors hover:text-mindsight-accent">
            Beneficios
          </Link>
          <Link href="#sleepbook" className="font-semibold text-mindsight-accent-secondary transition-colors hover:text-mindsight-accent">
            Sleepbook
          </Link>
          <Link href="#nosotros" className="font-semibold text-mindsight-accent-secondary transition-colors hover:text-mindsight-accent">
            Nosotros
          </Link>
        </nav>

        {/* 4. Reemplazamos el enlace por nuestro componente Button */}
        <div className="hidden md:block">
          <Button href="#cta" variant="main">
            Únete a nosotros
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;