'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const CTASection = () => {
  return (
    <section
      id="cta"
      className="bg-mindsight-main-secondary relative overflow-hidden py-20 md:py-32"
    >
      {/* Sutil brillo de fondo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,white_0%,transparent_60%)] opacity-50"></div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        {/* Mascota durmiendo con flotación */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="floating-animation mx-auto mb-8"
        >
          <Image
            src="/meendy-nube3.png"
            alt="Mindy durmiendo sobre una nube"
            width={750}
            height={550}
            className="mx-auto object-contain drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Título y descripción */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-mindsight-accent-secondary mb-4 text-3xl font-bold md:text-5xl">
            Empieza a dormir mejor. <br />
            <span className="text-mindsight-accent">Esta noche.</span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-gray-700">
            Únete a la comunidad <span className="font-semibold">Meendy</span> y
            transforma tus noches para siempre.
          </p>
        </motion.div>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* Android */}
          <a
            href="#"
            aria-label="Descargar la aplicación Meendy para Android"
            className="bg-mindsight-gradient flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.1,4.3H4.9C4.4,4.3,4,4.7,4,5.2v13.6c0,0.5,0.4,0.9,0.9,0.9h14.2c0.5,0,0.9-0.4,0.9-0.9V5.2C20,4.7,19.6,4.3,19.1,4.3z M8.3,6.1c0.2,0,0.4,0.2,0.4,0.4S8.5,6.9,8.3,6.9S7.9,6.7,7.9,6.5S8.1,6.1,8.3,6.1z M15.7,6.1c0.2,0,0.4,0.2,0.4,0.4s-0.2,0.4-0.4,0.4s-0.4-0.2-0.4-0.4S15.5,6.1,15.7,6.1z M10.8,17.6c-1.3,0-2.4-1.1-2.4-2.4c0-1.3,1.1-2.4,2.4-2.4c0.5,0,1,0.2,1.4,0.5l-1.8,1.8l1.8,1.8C11.8,17.4,11.3,17.6,10.8,17.6z" />
            </svg>
            Android
          </a>

          {/* iOS */}
          <a
            href="#"
            aria-label="Descargar la aplicación Meendy para iOS"
            className="button-minsdsight-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16.365 1.43c0 1.14-.42 2.16-1.26 3.06-.84.9-1.86 1.47-3.06 1.71-.12-.3-.18-.66-.18-1.08 0-1.02.36-1.89 1.08-2.61C13.755 1.77 14.655 1.38 15.675 1.2c.18.09.42.15.69.21zM21 17.79c-.54 1.26-1.32 2.37-2.34 3.33-1.14 1.05-2.4 1.59-3.78 1.59-.72 0-1.59-.18-2.61-.54-.96-.36-1.86-.54-2.7-.54-1.02 0-2.04.18-3.06.54-.9.36-1.62.54-2.16.54-1.38 0-2.64-.51-3.78-1.53C.63 20.22 0 18.93 0 17.19c0-1.38.39-2.67 1.17-3.87.78-1.2 1.8-2.1 3.06-2.7.96-.42 2.1-.63 3.42-.63 1.02 0 2.07.24 3.15.72 1.05.48 1.83.72 2.34.72.36 0 .93-.15 1.71-.45 1.23-.48 2.31-.72 3.24-.72 1.74 0 3.18.63 4.32 1.89.84.96 1.26 2.1 1.26 3.42 0 .54-.06 1.08-.18 1.62z" />
            </svg>
            iOS
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
