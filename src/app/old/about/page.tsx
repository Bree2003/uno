import Image from 'next/image';
import MindsightCloudDivider from '@/components/old/MindsightCloudDivider';
import MindsightFooter from '@/components/old/MindsightFooter';
import TeamMemberCard from '@/components/old/TeamMemberCard';
import { Card, CardContent, CardFooter } from '@/components/old/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/old/ui/carousel';
import { Separator } from '@/components/old/ui/separator';
import mindsightMembers from '@/utils/mindsightMembers';
import partners from '@/utils/partners';
import OnScrollRevealDiv from '@/components/old/ui/animated/on-scroll-reveal';

const About = () => {
  return (
    <>
      <section className="animate-background-cycle bg-gradient-dynamic pt-20">
        <div className="flex flex-col items-center gap-4 pb-10 md:h-full md:p-20">
          <OnScrollRevealDiv direction="top">
            <h1 className="text-3xl font-semibold md:text-7xl">Objetivo Mindsight</h1>
          </OnScrollRevealDiv>
          <OnScrollRevealDiv direction="top" delay={0.25}>
            <p className="max-w-5xl px-10 text-center text-sm md:text-xl">
              Acompañamos tu bienestar con el respaldo de expertos en salud mental y
              nutrición, junto a productos de alianzas que podrán complementar tu buen
              descanso, ofreciéndote herramientas, actividades y contenido diseñado para
              optimizar tu sueño y calidad de vida.
            </p>
          </OnScrollRevealDiv>
        </div>
        <MindsightCloudDivider />
      </section>
      <section className="space-y-10 bg-white p-10 text-black md:space-y-16 md:p-20">
        <div id="equipo" className="flex flex-col items-center gap-4 md:gap-6">
          <OnScrollRevealDiv direction="left">
            <h2 className="text-center text-3xl font-semibold md:text-6xl">
              Conoce al equipo Mindsight
            </h2>
          </OnScrollRevealDiv>
          <OnScrollRevealDiv direction="right">
            <p className="max-w-5xl text-center text-sm text-muted-foreground md:text-xl">
              Somos un equipo multidisciplinario, cada uno un artesano de su propia área,
              pero con un objetivo en común, permitirte dormir mejor!
            </p>
          </OnScrollRevealDiv>

          <div className="flex max-w-screen-2xl flex-wrap justify-center gap-4 md:gap-16">
            {mindsightMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
        <Separator className="bg-gradient-morning" />
        <div id="partners" className="flex flex-col items-center gap-4 md:gap-6">
          <OnScrollRevealDiv direction="left">
            <h2 className="text-center text-3xl font-semibold md:text-6xl">
              Nuestros Partners
            </h2>
          </OnScrollRevealDiv>
          <OnScrollRevealDiv direction="right">
            <p className="max-w-5xl text-center text-sm md:text-xl">
              ¡Conoce a la red del buen dormir!
            </p>
          </OnScrollRevealDiv>

          <OnScrollRevealDiv
            direction="bottom"
            className="w-full max-w-sm px-10 md:max-w-lg md:px-0"
          >
            <Carousel
              opts={{
                align: 'start',
                loop: true,
                dragFree: true,
              }}
            >
              <CarouselContent className="-ml-4">
                {partners.map((partner, index) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/3">
                    <Card className="flex aspect-square flex-col p-1">
                      <CardContent className="flex flex-grow items-center justify-center">
                        <a href={partner.url} target="_blank" rel="noreferrer">
                          <Image
                            src={`/mindsightPartners/${partner.logoPathUrl}`}
                            alt={partner.name}
                            width={200}
                            height={200}
                          />
                        </a>
                      </CardContent>
                      <CardFooter className="flex flex-col items-center p-1">
                        <p>{partner.name}</p>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </OnScrollRevealDiv>
        </div>
      </section>
      <MindsightFooter>
        <MindsightCloudDivider variant="bottom" />
      </MindsightFooter>
    </>
  );
};

export default About;
