import type { LucideIcon } from 'lucide-react';
import OnScrollRevealDiv from '../old/ui/animated/on-scroll-reveal';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const BenefitCard = (props: BenefitCardProps) => {
  const { title, description, icon: Icon } = props;
  return (
    <OnScrollRevealDiv
      className="border-mindsight-accent flex w-[400px] flex-row items-center rounded-2xl bg-white p-4 text-left lg:p-6"
      direction="bottom"
    >
      {/* Icono a un costado */}
      <div className="bg-mindsight-main-secondary mr-4 flex h-16 w-16 items-center justify-center rounded-full p-3">
        <Icon
          strokeWidth={1.5}
          className="size-8 shrink-0 stroke-[--mindsight-accent-secondary] lg:size-10"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col">
        <h3 className="mb-1 text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    </OnScrollRevealDiv>
  );
};

export default BenefitCard;
