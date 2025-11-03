'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  variant?: 'main' | 'secondary';
  href?: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  ariaLabel?: string;
}

const Button = ({
  variant = 'main',
  href = '#',
  children,
  icon,
  className,
  ariaLabel,
}: ButtonProps) => {
  const baseStyles =
    'flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 sm:w-auto w-full';

  const variants = {
    main: 'bg-mindsight-gradient text-white shadow-md hover:scale-105 hover:shadow-lg',
    secondary:
      'border-2 border-mindsight-accent text-mindsight-accent bg-white shadow-sm hover:scale-105 hover:shadow-md',
  };

  const classes = clsx(baseStyles, variants[variant], className);

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.04 }}
      className={classes}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </motion.a>
  );
};

export default Button;
