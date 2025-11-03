'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="hero-gradient overflow-hidden pb-16 pt-24 text-center md:pb-24 md:pt-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-mindsight-accent-secondary mb-4 text-4xl font-black leading-tight md:text-6xl">
            La forma <span className="text-mindsight-accent">divertida</span> de dormir
            mejor.
          </h1>
          <p className="mb-8 text-lg text-gray-600 md:text-xl">
            Mejora tu bienestar emocional y calidad del descanso con rutinas guiadas,
            monitoreo y una comunidad que te apoya.
          </p>
          <a
            href="#cta"
            className="bg-mindsight-gradient inline-block rounded-full px-8 py-4 text-lg font-bold text-white transition-transform duration-300 hover:scale-105"
          >
            Comenzar mi viaje
          </a>
        </div>

        {/* Imagen flotante de Mindy */}
        <div className="floating-animation relative mx-auto mt-12 h-48 w-48 md:mt-16">
          <Image
            src="/mindy.png"
            alt="Mindy flotando"
            width={250}
            height={250}
            className="mx-auto object-contain drop-shadow-xl"
            priority
          />
        </div>

        {/* Confianza */}
        <div className="mt-20">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Confían en Mindsight
          </p>
          <div className="text-mindsight-accent-secondary mt-4 flex items-center justify-center space-x-8 font-bold opacity-60 grayscale md:space-x-12">
            <p>Emma</p>
            <p>SANTIAGO</p>
            <p>hypnos</p>
            <p>qactus</p>
            <p>WORK</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
