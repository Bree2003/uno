import Image from 'next/image';
import { FaWhatsapp, FaGooglePlay } from 'react-icons/fa';
import { Apple, BookHeart, Brain, PencilRuler, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/old/ui/button';
import { Separator } from '@/components/old/ui/separator';
import MindsightCloudDivider from '@/components/old/MindsightCloudDivider';
import MindsightFooter from '@/components/old/MindsightFooter';
import BenefitCard from '@/components/old/BenefitCard';
import Phone from '@/assets/MindsightPhone.svg';
import { HoverEffect3D } from '@/components/old/ui/animated/3d-hover-effect';
import OnScrollRevealDiv from '@/components/old/ui/animated/on-scroll-reveal';

const Landing = () => {
  return (
    <>
      <section className="flex w-full animate-background-cycle flex-col bg-gradient-dynamic md:h-svh">
        <div className="relative flex w-full flex-grow flex-col justify-center px-10 md:grid md:grid-cols-4 md:grid-rows-3 lg:px-20 xl:px-40">
          <div className="z-[1] col-span-2 col-end-3 row-span-3 flex h-min w-fit flex-col gap-6 self-center pb-10 pt-20">
            <OnScrollRevealDiv direction="left">
              <h2 className="text-4xl font-bold lg:text-6xl xl:text-7xl">
                Bienestar y descanso en un sólo click.
              </h2>
            </OnScrollRevealDiv>
            <OnScrollRevealDiv delay={0.1} direction="left">
              <p className="w-auto lg:text-xl xl:text-2xl">
                En <b>Mindsight</b> te queremos ayudar a mejorar tu calidad de sueño
                mediante el uso de herramientas tecnológicas enfocadas en la salud mental
                y la nutrición, cómo también acompañarte en productos que son
                complementarios a un buen dormir, formando un ecosistema para dormir
                mejor!
              </p>
            </OnScrollRevealDiv>
            <OnScrollRevealDiv delay={0.2} direction="left">
              <Button
                className="w-fit rounded-full p-5 font-semibold md:px-10 md:py-6 md:text-xl"
                size="lg"
                asChild
              >
                <a href="#comunidad">Únete y empieza a dormir mejor!</a>
              </Button>
            </OnScrollRevealDiv>
          </div>
          <OnScrollRevealDiv
            className="hidden w-full md:absolute md:bottom-0 md:right-0 md:top-0 md:z-0 md:m-auto md:flex md:max-w-screen-2xl md:flex-col md:justify-center lg:px-20 xl:px-40"
            direction="right"
          >
            <Image
              src="/mindsight-hero-image.png"
              alt="Mindsight Hero Image"
              width={2000}
              height={2000}
            />
          </OnScrollRevealDiv>
        </div>
        <MindsightCloudDivider variant="top" className="w-full" />
      </section>
      <section className="lg:space-y-18 flex flex-col space-y-10 bg-white px-10 py-10 md:py-24 xl:px-32 2xl:px-40">
        <div id="comunidad" className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
          <OnScrollRevealDiv className="hidden justify-center md:flex" direction="left">
            <HoverEffect3D>
              <Phone className="md:h-96 lg:h-[600px]" />
            </HoverEffect3D>
          </OnScrollRevealDiv>
          <div className="flex flex-col justify-center gap-3 md:gap-6">
            <OnScrollRevealDiv direction="right">
              <h3 className="text-3xl font-semibold text-black lg:text-5xl">
                Sobre <span className="text-primary">Mindsight</span>
              </h3>
            </OnScrollRevealDiv>
            <OnScrollRevealDiv direction="right">
              <p className="text-sm text-muted-foreground lg:text-xl">
                <span className="font-semibold text-primary">
                  Bienvenido a Mindsight, la comunidad virtual dedicada a transformar tu
                  descanso.
                </span>{' '}
                Acompañamos tu bienestar con el respaldo de expertos en salud mental y
                nutrición, junto a productos de alianzas que podrán complementar tu buen
                descanso, ofreciéndote herramientas, actividades y contenido diseñado para
                optimizar tu sueño y calidad de vida.
              </p>
            </OnScrollRevealDiv>
            <OnScrollRevealDiv direction="right">
              <p className="text-sm text-muted-foreground lg:text-xl">
                Gracias a nuestras alianzas podrás acceder a soluciones innovadoras y
                personalizadas para mejorar tu descanso. Tu descanso es la base de tu
                bienestar, y en Mindsight estamos aquí para ayudarte a alcanzar su máximo
                potencial.
              </p>
            </OnScrollRevealDiv>
            <div className="flex w-min flex-col gap-y-2">
              <OnScrollRevealDiv direction="right">
                <Button
                  className="w-full rounded-full lg:h-fit lg:px-14 lg:text-xl xl:text-2xl xl:font-bold"
                  asChild
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.mindsight.mnemosine"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGooglePlay className="mr-2 size-6 shrink-0 lg:size-8" />
                    Descarga nuestra App!
                  </a>
                </Button>
              </OnScrollRevealDiv>
              <p className="text-center text-sm font-medium text-primary lg:text-xl">&</p>
              <OnScrollRevealDiv direction="right">
                <Button
                  className="rounded-full lg:h-fit lg:px-14 lg:text-xl xl:text-2xl xl:font-bold"
                  asChild
                >
                  <a
                    href="https://chat.whatsapp.com/LWJYo6EDJVA37ZmyZ8HRk3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp className="mr-2 size-6 shrink-0 lg:size-8" />
                    Únete a nuestra comunidad!
                  </a>
                </Button>
              </OnScrollRevealDiv>
            </div>
          </div>
        </div>
        <Separator className="bg-gradient-morning" />
        <div
          id="sleepbook"
          className="flex flex-col items-center space-y-6 xl:space-y-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <OnScrollRevealDiv className="hidden justify-center md:flex" direction="left">
              <div className="relative flex w-full flex-row justify-center">
                <Image
                  src="/sleepbook.png"
                  alt="Mindsight sleepbook"
                  fill
                  className="object-contain"
                />
              </div>
            </OnScrollRevealDiv>
            <div className="flex flex-col gap-3 md:gap-6">
              <OnScrollRevealDiv direction="right">
                <h3 className="text-3xl font-semibold text-black lg:text-5xl">
                  Nuestro <span className="text-secondary">SleepBook</span>
                </h3>
              </OnScrollRevealDiv>
              <OnScrollRevealDiv direction="right">
                <OnScrollRevealDiv
                  className="relative float-left flex aspect-square w-44 items-center justify-center md:hidden"
                  direction="left"
                >
                  <Image
                    src="/sleepbook.png"
                    alt="Mindsight sleepbook"
                    fill
                    className="object-contain"
                  />
                </OnScrollRevealDiv>
                <p className="text-pretty text-sm text-muted-foreground lg:text-xl">
                  Este SleepBook,{' '}
                  <span className="font-semibold italic text-secondary">
                    &quot;Salud mental para un buen descanso&quot;
                  </span>
                  , tiene como objetivo explorar la profunda correlación entre estos dos
                  aspectos vitales de nuestra vida (la calidad del sueño y nuestra salud
                  mental), con el propósito de entregarte información valiosa sobre cómo
                  una buena higiene del sueño puede mejorar significativamente nuestra
                  salud mental y, a su vez, cómo una salud mental equilibrada puede
                  favorecer un sueño reparador.
                </p>
              </OnScrollRevealDiv>
              <OnScrollRevealDiv direction="right">
                <p className="text-sm text-muted-foreground lg:text-xl">
                  El SleepBook de Mindsight es una guía completa que tiene como objetivo:
                </p>
              </OnScrollRevealDiv>
              <OnScrollRevealDiv direction="right" className="inline">
                <ul className="list-inside list-disc text-sm text-muted-foreground lg:text-xl">
                  <li className="marker:text-secondary">
                    Concienciar sobre la importancia del trabajo en la calidad del sueño y
                    nuestra salud mental.
                  </li>
                  <li className="marker:text-secondary">
                    Entregar herramientas prácticas y reflexivas sobre salud mental e
                    higiene del sueño.
                  </li>
                  <li className="marker:text-secondary">
                    Guiar en la construcción, desde un lugar de autoconocimiento y
                    autenticidad, de una rutina de higiene del sueño adaptada a tus
                    necesidades.
                  </li>
                </ul>
              </OnScrollRevealDiv>
              <OnScrollRevealDiv direction="right">
                <Button
                  className="rounded-full p-3 lg:mt-6 lg:h-fit lg:px-14 lg:text-xl xl:text-2xl xl:font-bold"
                  asChild
                >
                  <a
                    href="https://mindsight.leadsmasivos.cl/ "
                    target="_blank"
                    rel="noreferrer"
                  >
                    Obten tu Sleepbook aquí!
                  </a>
                </Button>
              </OnScrollRevealDiv>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:space-y-6 lg:w-3/4 2xl:w-2/3">
            <OnScrollRevealDiv direction="left">
              <OnScrollRevealDiv
                className="float-right ml-3 flex items-center justify-center md:block"
                direction="left"
              >
                <div className="flex shrink grow-0 animate-background-cycle rounded-full bg-gradient-dynamic p-1">
                  <div className="relative h-28 w-28 rounded-full border-4 border-white md:h-36 md:w-36 lg:h-48 lg:w-48">
                    <Image
                      src="/mari-ebook.jpg"
                      alt="autora"
                      fill
                      className="rounded-full"
                    />
                  </div>
                </div>
              </OnScrollRevealDiv>
              <OnScrollRevealDiv className="text-sm text-muted-foreground lg:text-xl">
                <h3 className="mb-3 text-3xl font-semibold text-black lg:text-4xl">
                  Sobre la autora
                </h3>
                ¡Hola! Soy{' '}
                <span className="font-semibold text-secondary">
                  María Ignacia Canessa
                </span>
                , fundadora de Mente en Balance. Soy psicóloga clínica con especialidad en
                el manejo de ansiedad y estrés, y cuento con experiencia en psicoterapia
                infanto-juvenil y adulta. Además, me he formado como instructora de
                Vinyasa Yoga, lo que me ha permitido integrar herramientas como
                mindfulness, meditación y ejercicios de respiración tanto en mi ejercicio
                profesional como en mi vida personal.
              </OnScrollRevealDiv>
            </OnScrollRevealDiv>
            <OnScrollRevealDiv className="justify-center md:flex" direction="left">
              <p className="text-pretty text-sm text-muted-foreground lg:text-xl">
                La construcción de este Sleepbook nace de mi profunda creencia en la
                conexión entre cuerpo y mente. A lo largo de mi experiencia, he visto cómo
                la calidad del sueño es un reflejo de nuestra salud mental y cómo trabajar
                en nuestro bienestar físico, incluyendo el descanso, impacta directamente
                en nuestro bienestar integral. En consulta, suelo abordar esta relación
                con mis pacientes, ya que mejorar el sueño no solo es cuestión de hábitos,
                sino también de autoconocimiento y regulación emocional.
              </p>
            </OnScrollRevealDiv>
            <OnScrollRevealDiv className="justify-center md:flex" direction="left">
              <p className="text-pretty text-sm text-muted-foreground lg:text-xl ">
                Este Sleepbook busca ser una guía para explorar la relación entre tu salud
                mental y tu descanso, integrando herramientas de higiene del sueño de
                manera consciente e informada. A través de actividades de autoobservación
                y prácticas basadas en evidencia, te invito a construir una rutina de
                sueño que respalde tu bienestar integral.
              </p>
            </OnScrollRevealDiv>
          </div>
        </div>
        <Separator className="bg-gradient-morning" />
        <div id="beneficios" className="flex flex-col items-center gap-6 md:gap-12">
          <OnScrollRevealDiv direction="bottom">
            <h3 className="text-3xl font-semibold text-black lg:text-5xl">
              ¿Qué beneficios ofrece <span className="text-primary">Mindsight</span>?
            </h3>
          </OnScrollRevealDiv>
          <div className="flex flex-wrap justify-around gap-y-6">
            <BenefitCard
              title="Profesionales de la salud mental"
              icon={Brain}
              description="Listos para brindar orientación, contención y herramientas efectivas para tu día a día."
            />
            <BenefitCard
              title="Expertos en el área de nutrición"
              icon={Apple}
              description="¡Las mejores herramientas y los mejores tips para tu mejor provecho! Descubre nuestro asesoramiento y optimiza tu salud física."
            />
            <BenefitCard
              title="Productos digitales"
              icon={BookHeart}
              description="Podrás obtener libros (ebooks) y próximos productos digitales enfocados en el buen descanso y dormir, con el objetivo de darte mayores herramientas para mejorar tu bienestar!"
            />
            <BenefitCard
              title="Actividades y banco de herramientas"
              icon={PencilRuler}
              description="Descubre las herramientas y actividades guiadas que nuestro equipo de expertos ha diseñado para ti."
            />
            <BenefitCard
              title="Acceso a alianzas y comunidad"
              icon={HeartHandshake}
              description="Dentro de Mindsight es sumamente importante apoyarte en el camino a tu mejor descanso, es por ello que contarás con descuentos exclusivos para la comunidad de Mindsight en conjunto a sus alianzas."
            />
          </div>
        </div>
      </section>
      <MindsightFooter>
        <MindsightCloudDivider variant="bottom" />
      </MindsightFooter>
    </>
  );
};

export default Landing;
