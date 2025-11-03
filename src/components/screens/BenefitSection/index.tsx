import { Apple, BookHeart, Brain, HeartHandshake, PencilRuler } from 'lucide-react';
import BenefitCard from '../../BenefitCard';
import TitleSection from '../../TitleSection';
import StarLine from '../../ui/StarLine';

const benefits = [
  {
    title: 'Profesionales de la salud mental',
    icon: Brain,
    description:
      'Listos para brindar orientación, contención y herramientas efectivas para tu día a día.',
  },
  {
    title: 'Expertos en el área de nutrición',
    icon: Apple,
    description:
      '¡Las mejores herramientas y los mejores tips para tu mejor provecho! Descubre nuestro asesoramiento y optimiza tu salud física.',
  },
  {
    title: 'Productos digitales',
    icon: BookHeart,
    description:
      'Podrás obtener libros y productos digitales enfocados en el buen descanso y dormir, con el objetivo de darte mayores herramientas para mejorar tu bienestar.',
  },
  {
    title: 'Actividades y banco de herramientas',
    icon: PencilRuler,
    description:
      'Descubre las herramientas y actividades guiadas que nuestro equipo de expertos ha diseñado para ti.',
  },
  {
    title: 'Acceso a alianzas y comunidad',
    icon: HeartHandshake,
    description:
      'Dentro de Mindsight contarás con descuentos exclusivos en colaboración con nuestras alianzas y comunidad.',
  },
];

const BenefitSection = () => {
  const amplitude = 10; // ancho de la curva del StarLine
  const verticalGap = 190; // separación entre puntos (ajusta para coincidir visualmente con tu StarLine)
  const frequency = 0.6; // frecuencia de la curva

  return (
    <section className="bg-mindsight-main-secondary relative overflow-hidden px-20 py-10">
      <div className="container mx-auto">
        {/* Título */}
        <div className="mb-16">
          <TitleSection textTitle="¿Qué beneficios ofrece Mindsight?" />
        </div>

        {/* Contenedor general */}
        <div className="relative flex justify-center">
          {/* Línea serpenteante */}
          <StarLine
            count={benefits.length * 5.6} // más densa para que se vea suave
            variant="snake"
            className="absolute left-1/2 top-0 -translate-x-1/2"
          />

          {/* 💳 Tarjetas ancladas a la curva */}
          <div className="absolute">
            {benefits.map((benefit, i) => {
              const isEven = i % 2 === 0;
              const y = i * verticalGap; // +20 para un pequeño offset
              const x = Math.sin(i * frequency) * amplitude; // igual a la StarLine
              const horizontalOffset = isEven ? -360 : 360; // mueve a cada lado de la línea

              return (
                <div
                  key={benefit.title}
                  className="absolute left-1/2 -translate-x-1/2 transform"
                  style={{
                    top: `${y}px`,
                    transform: `translate(calc(-50% + ${x}px), 0)`,
                  }}
                >
                  <div
                    className="mt-5 transition-transform duration-700"
                    style={{
                      transform: `translateX(${horizontalOffset}px)`,
                    }}
                  >
                    <BenefitCard
                      title={benefit.title}
                      icon={benefit.icon}
                      description={benefit.description}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
