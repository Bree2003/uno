'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import Image from 'next/image';

// Definimos los props que el componente recibirá
interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Títulos de respuesta para el paso de resultado
const responseTitles: { [key: string]: string } = {
  mal: '¡Entendido!',
  regular: 'Podemos mejorar eso',
  bien: '¡Maravilloso!',
};

const OnboardingModal = ({ isOpen, onClose }: OnboardingModalProps) => {
  const [step, setStep] = useState<'question' | 'result'>('question');
  const [resultTitle, setResultTitle] = useState('');

  // Reiniciar el estado del modal cuando se cierra
  useEffect(() => {
    if (!isOpen) {
      // Pequeño delay para que la animación de salida termine antes de resetear
      setTimeout(() => {
        setStep('question');
        setResultTitle('');
      }, 300);
    }
  }, [isOpen]);

  const handleOptionClick = (response: 'mal' | 'regular' | 'bien') => {
    setResultTitle(responseTitles[response]);
    setStep('result');
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 backdrop-blur-sm"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          onClick={onClose} // Cierra el modal al hacer clic en el fondo
        >
          <motion.div
            className="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl md:p-12"
            variants={modalVariants}
            exit="exit"
            onClick={(e) => e.stopPropagation()} // Evita que el clic se propague al fondo
          >
            <button
              onClick={onClose}
              aria-label="Cerrar modal"
              className="absolute top-4 right-6 text-3xl text-gray-400 hover:text-gray-600"
            >
              &times;
            </button>
            
            <AnimatePresence mode="wait">
              {step === 'question' && (
                <motion.div
                  key="question"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <h2 className="mb-8 text-center text-3xl font-black text-mindsight-accent-secondary">
                    ¿Cómo dormiste anoche?
                  </h2>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <OptionButton emoji="😫" text="Mal" onClick={() => handleOptionClick('mal')} />
                    <OptionButton emoji="😐" text="Regular" onClick={() => handleOptionClick('regular')} />
                    <OptionButton emoji="😴" text="¡Muy bien!" onClick={() => handleOptionClick('bien')} />
                  </div>
                </motion.div>
              )}

              {step === 'result' && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { staggerChildren: 0.1 } }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-mindsight-main-secondary"
                  >
                    <Image src="/mindy.png" alt="Oveja de Meendy" width={80} height={80} />
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-mindsight-accent mb-4 text-3xl font-black"
                  >
                    {resultTitle}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 text-lg text-mindsight-accent-secondary"
                  >
                    Meendy está aquí para ayudarte. Analizaremos tus hábitos y te conectaremos con expertos.
                  </motion.p>
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <Button variant="main" href="#">
                        Explorar la app
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Componente interno para los botones de opción para no repetir código
const OptionButton = ({ emoji, text, onClick }: { emoji: string; text: string; onClick: () => void }) => (
  <button
    className="option-button flex flex-col items-center rounded-2xl p-6"
    onClick={onClick}
  >
    <span className="mb-2 text-5xl">{emoji}</span>
    <span className="text-lg font-bold text-mindsight-accent-secondary">{text}</span>
  </button>
);


export default OnboardingModal;