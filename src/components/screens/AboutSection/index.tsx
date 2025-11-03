import { FaGooglePlay, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import TitleSection from '../../TitleSection';
import StarLine from '../../ui/StarLine';
import OnScrollRevealDiv from '../../old/ui/animated/on-scroll-reveal';
import { HoverEffect3D } from '@/components/old/ui/animated/3d-hover-effect';
// import Phone from '@/assets/MindsightPhone.svg';

const AboutSection = () => {
  return (
    <section className="relative bg-white p-10">
      <div className="container mx-auto flex flex-col items-center justify-center gap-16 px-6 md:flex-row md:items-center md:justify-between">
        <div className="relative flex w-full justify-center md:w-1/2">
          <OnScrollRevealDiv direction="left">
            <HoverEffect3D>
              {/* <Phone className="h-80 md:h-96 lg:h-[600px]" /> */}
              <Image alt="prototipo" height={600} width={280} src="/prototipo.png" />
            </HoverEffect3D>
          </OnScrollRevealDiv>
          <div className="absolute right-[-40px] top-1/2 hidden -translate-y-1/2 md:flex">
            <StarLine
              count={14}
              variant="straight"
              className="mr-10 flex flex-col gap-2"
            />
            {/* <StarLine count={16} variant="snake" className="w-24" /> */}
          </div>
        </div>
        <div className="md:w-1/2">
          <OnScrollRevealDiv className="mb-8" direction="right">
            <TitleSection textTitle="Sobre Mindsight" />
          </OnScrollRevealDiv>
          <OnScrollRevealDiv direction="right">
            <p className="mb-4 text-xl leading-relaxed text-gray-600">
              <span className="font-semibold text-[--mindsight-accent]">
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
            <p className="mb-10 text-xl leading-relaxed text-gray-600">
              Gracias a nuestras alianzas podrás acceder a soluciones innovadoras y
              personalizadas para mejorar tu descanso. Tu descanso es la base de tu
              bienestar, y en Mindsight estamos aquí para ayudarte a alcanzar su máximo
              potencial.
            </p>
          </OnScrollRevealDiv>
          <OnScrollRevealDiv direction="right">
            <div className="flex items-center gap-4">
              <button className="bg-mindsight-accent rounded-xl p-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.mindsight.mnemosine"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center font-semibold text-white"
                >
                  <FaGooglePlay className="mr-2 size-6 shrink-0 lg:size-8" />
                  Descarga nuestra App!
                </a>
              </button>
              <span className="text-xl font-semibold leading-relaxed text-gray-600">
                &
              </span>
              <button className="bg-mindsight-accent rounded-xl p-3">
                <a
                  href="https://chat.whatsapp.com/LWJYo6EDJVA37ZmyZ8HRk3"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center font-semibold text-white"
                >
                  <FaWhatsapp className="mr-2 size-6 shrink-0 lg:size-8" />
                  Únete a nuestra comunidad!
                </a>
              </button>
            </div>
          </OnScrollRevealDiv>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
