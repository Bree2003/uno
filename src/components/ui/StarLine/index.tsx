import Image from 'next/image';
import OnScrollRevealDiv from '../../old/ui/animated/on-scroll-reveal';

interface StarLineProps {
  count: number;
  className?: string;
  variant?: 'straight' | 'snake';
}

const delayStep = 0.1; // ⬅tiempo entre cada estrella en segundos

const StarLine = ({ count, className, variant = 'straight' }: StarLineProps) => {
  if (variant === 'straight') {
    // Línea recta vertical
    return (
      <div className={`flex flex-col items-center gap-4 ${className}`}>
        {Array.from({ length: count }).map((_, i) => (
          <OnScrollRevealDiv key={i} direction="bottom" delay={i * delayStep}>
            <Image alt="star" src="/star.png" width={24} height={24} />
          </OnScrollRevealDiv>
        ))}
      </div>
    );
  }

  // Línea tipo “S” fluida (más curvas, estrellas juntas)
  const amplitude = 80;
  const frequency = 0.6;
  const verticalGap = 35;

  const stars = Array.from({ length: count }).map((_, i) => {
    const y = i * verticalGap;
    const x = Math.sin(i * frequency) * amplitude;

    return (
      <OnScrollRevealDiv key={i} direction="bottom" delay={i * delayStep}>
        <Image
          alt="star"
          src="/star.png"
          width={24}
          height={24}
          style={{
            position: 'absolute',
            left: `calc(50% + ${x}px)`,
            top: `${y}px`,
            transform: 'translateX(-50%)',
          }}
        />
      </OnScrollRevealDiv>
    );
  });

  const height = count * verticalGap + 50;

  return (
    <div className={`relative w-full h-[${height}px] ${className}`} style={{ height }}>
      {stars}
    </div>
  );
};

export default StarLine;
