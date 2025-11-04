'use client';

import { motion } from 'framer-motion';

// Datos para las tarjetas, lo que facilita añadir o cambiar contenido
const problems = [
  {
    emoji: '😩',
    title: 'Estrés y Ansiedad',
    description: 'Un ciclo vicioso que no te deja descansar ni de día ni de noche.',
  },
  {
    emoji: '☕️',
    title: 'Baja Productividad',
    description: 'La falta de energía y concentración te impide rendir al máximo.',
  },
  {
    emoji: '😠',
    title: 'Irritabilidad y Fatiga',
    description: 'El cansancio constante afecta tu humor y tus relaciones personales.',
  },
];

// Variantes de animación para Framer Motion
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.2, // Anima los hijos (las tarjetas) uno tras otro
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProblemSection = () => {
  return (
    <motion.section
      id="problem-section"
      className="px-4 py-20 md:py-28" // Eliminamos text-gray-800 para que herede el color base
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // La animación se activa al ver el 30% de la sección
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold text-mindsight-accent-secondary md:text-4xl">
          ¿Te sientes así?
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-mindsight-accent-secondary">
          Dormir mal afecta tu salud mental, productividad y relaciones.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {problems.map((problem) => (
            <motion.div key={problem.title} variants={cardVariants}>
              <ProblemCard
                emoji={problem.emoji}
                title={problem.title}
                description={problem.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Componente reutilizable para cada tarjeta de problema
const ProblemCard = ({ emoji, title, description }: { emoji: string; title: string; description: string; }) => {
  return (
    <div className="glass-card rounded-3xl p-8 text-mindsight-accent-secondary">
      <div className="mb-4 text-4xl">{emoji}</div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProblemSection;