'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import type { Variants } from 'framer-motion';

type RevealDirection = 'left' | 'right' | 'top' | 'bottom';

const variants: Variants = {
  hidden: { opacity: 0 },
  left: { opacity: 0, x: -100 },
  right: { opacity: 0, x: 100 },
  top: { opacity: 0, y: -100 },
  bottom: { opacity: 0, y: 100 },
  visible: { opacity: 100, x: 0, y: 0 },
};

interface OnScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  direction?: RevealDirection;
}

const OnScrollRevealDiv = (props: OnScrollRevealProps) => {
  const { children, className, delay, direction } = props;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      className={className}
      ref={ref}
      variants={variants}
      initial={direction ?? 'hidden'}
      animate={mainControls}
      transition={{ duration: 1, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default OnScrollRevealDiv;
