'use client';

import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ImAndroid } from "react-icons/im";
import { ImAppleinc } from "react-icons/im";

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
            className="mx-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
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
            Únete a la comunidad <span className="font-semibold">Mindsight</span> y
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
          <Button variant='main' icon={<ImAndroid />} ariaLabel="Descargar la aplicación Meendy para Android">
            Android
          </Button>
          <Button variant='secondary' icon={<ImAppleinc />} ariaLabel="Descargar la aplicación Meendy para iOS">
            iOS
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;