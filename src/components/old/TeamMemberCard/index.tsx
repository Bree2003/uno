import Link from 'next/link';
import Image from 'next/image';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import SocialsIcons from '@/utils/socialsIcons';
import { Member, MindsightFrameClassMapper } from '@/utils/mindsightMembers';
import Frame from '@/assets/MindsightMemberFrame.svg';
import { cn } from '@/utils/cn';
import OnScrollRevealDiv from '@/components/old/ui/animated/on-scroll-reveal';

const cardVariants = cva(
  'bg-white rounded-3xl shadow-xl p-5 pt-6 flex flex-col items-center text-black space-y-2 sm:w-72 w-56',
  {
    variants: {
      variant: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface TeamMemberCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  member: Member;
}

const TeamMemberCard = (props: TeamMemberCardProps) => {
  const { variant, className, member } = props;
  const { name, role, description, socials, imageUrl, area } = member;

  const frameClassname = MindsightFrameClassMapper[area];

  return (
    <OnScrollRevealDiv
      direction="bottom"
      className={cn(cardVariants({ variant, className }))}
    >
      <div className={cn('relative flex items-center justify-center', frameClassname)}>
        <Frame className="absolute z-[1] size-[120px] md:size-[185px]" />
        <svg className="h-0 w-0">
          <defs>
            <linearGradient
              id={`${frameClassname}-svg-gradient`}
              x2="1"
              y2="1"
              aria-hidden="true"
            >
              <stop className="gradient-start" offset="0%" />
              <stop className="gradient-end" offset="100%" />
            </linearGradient>
          </defs>
        </svg>
        {imageUrl ? (
          <Image
            src={`/mindsightMembers/${imageUrl}`}
            alt={name}
            width={180}
            height={180}
            className="size-[115px] rounded-full md:size-[180px]"
          />
        ) : (
          <div className="size-[115px] rounded-full bg-slate-300 md:size-[180px]" />
        )}
      </div>
      <h3 className="text-center text-base font-semibold md:text-xl">{name}</h3>
      <h4 className="text-center text-base text-muted-foreground md:text-lg">{role}</h4>
      <p className="text-justify text-xs text-muted-foreground md:text-sm">
        {description ??
          `Hola, soy ${name}, y junto a Mindsight busco ayudar a las personas que sufren de una mala calidad del sueño, brindándoles herramientas y apoyo para mejorar su salud mental, su higiene del sueño, sus hábitos alimenticios y su bienestar general, todo mediante las habilidades y conocimientos que poseo en mi área de experticia.`}
      </p>
      <div className="flex gap-2">
        {Object.entries(socials).map(([social, url]) => {
          const Icon = SocialsIcons[social as keyof typeof SocialsIcons];
          return (
            <Link href={url} key={`${name}-${social}`}>
              <Icon size={24} />
            </Link>
          );
        })}
      </div>
    </OnScrollRevealDiv>
  );
};

export default TeamMemberCard;
