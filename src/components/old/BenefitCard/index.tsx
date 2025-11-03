import type { LucideIcon } from 'lucide-react';
import OnScrollRevealDiv from '@/components/old/ui/animated/on-scroll-reveal';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

const BenefitCard = (props: BenefitCardProps) => {
  const { title, description, icon: Icon } = props;
  return (
    <OnScrollRevealDiv
      className="flex gap-4 lg:basis-1/3 lg:flex-col lg:items-center lg:gap-5 lg:p-10 lg:text-center"
      direction="bottom"
    >
      <>
        <Icon className="size-8 shrink-0 stroke-primary stroke-1 lg:size-20" />
        <div className="space-y-1">
          <h3 className="text-md font-bold leading-tight text-black md:text-2xl md:leading-normal">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground md:text-lg">{description}</p>
        </div>
      </>
    </OnScrollRevealDiv>
  );
};

export default BenefitCard;
