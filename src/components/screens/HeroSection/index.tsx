'use client';

// 1. Importa 'useState' de React y el componente del modal
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import OnboardingModal from '@/components/ui/OnboardingModal'; // <-- Asegúrate de que la ruta sea correcta

const HeroSection = () => {
  // 2. Define el estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animaciones para Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    // Se usa un Fragment (<>) para poder devolver dos componentes hermanos: <main> y <OnboardingModal>
    <>
      <main
        id="welcome"
        className="relative flex min-h-screen w-full flex-col items-center justify-center p-6 pt-20 text-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div
            variants={itemVariants}
            className="animate-float relative mb-8 w-full max-w-xs md:max-w-sm"
          >
            <Image
              src="/mindy.png"
              alt="Mindy flotando"
              width={100}
              height={100}
              className="mx-auto object-contain drop-shadow-xl"
              priority
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-4 text-5xl font-black leading-tight text-mindsight-accent-secondary md:text-7xl"
          >
            Bienvenido a <span className="text-mindsight-accent">Mindsight</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-lg text-xl text-mindsight-accent-secondary"
          >
            Tu compañero de ensueño para noches tranquilas y mañanas felices.
          </motion.p>

          <motion.div variants={itemVariants}>
            {/* 3. Modifica el botón para que use 'onClick' y abra el modal */}
            <Button variant="main" onClick={() => setIsModalOpen(true)}>
              Comenzar
            </Button>
          </motion.div>
        </motion.div>

        {/* Indicador de Scroll */}
        <a
          href="#problem-section"
          aria-label="Ir a la siguiente sección"
          className="absolute animate-bounce-slow bottom-10 text-mindsight-accent-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </main>

      {/* 4. Renderiza el modal y le pasa las props para controlarlo */}
      <OnboardingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default HeroSection;