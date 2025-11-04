'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import clsx from 'clsx';

// 1. Añadimos 'onClick' a la interfaz de props
interface ButtonProps {
  variant?: 'main' | 'secondary';
  href?: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void; // <-- Prop añadida
}

const Button = ({
  variant = 'main',
  href, // Quitamos el valor por defecto para una lógica más clara
  children,
  icon,
  className,
  ariaLabel,
  onClick, // 2. Recibimos la prop 'onClick'
}: ButtonProps) => {
  const baseStyles =
    'flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 sm:w-auto w-full';

  const variants = {
    main: 'bg-mindsight-gradient text-white shadow-md hover:scale-105 hover:shadow-lg',
    secondary:
      'border-2 border-mindsight-accent text-mindsight-accent bg-white shadow-sm hover:scale-105 hover:shadow-md',
  };

  const classes = clsx(baseStyles, variants[variant], className);

  // 3. Si existe 'href', renderizamos un enlace (<a>)
  if (href) {
    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        whileTap={{ scale: 0.96 }}
        whileHover={{ scale: 1.04 }}
        className={classes}
        onClick={onClick} // También pasamos onClick por si se necesita en un enlace
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </motion.a>
    );
  }

  // 4. Si no existe 'href', renderizamos un botón (<button>)
  return (
    <motion.button
      onClick={onClick}
      aria-label={ariaLabel}
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.04 }}
      className={classes}
      type="button" // Es una buena práctica especificar el tipo
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;