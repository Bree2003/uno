import Image from 'next/image';
import TitleSection from '../../TitleSection';

const SleepBoookSection = () => {
  return (
    <div className="bg-white p-10">
      <div className="container mx-auto flex flex-col items-center gap-10 md:flex-row">
        {/* Imagen izquierda */}
        <div className="relative h-64 w-full md:h-[600px] md:w-1/2">
          <Image
            src="/sleepbook.png"
            alt="Mindsight sleepbook"
            fill
            className="object-contain"
          />
        </div>

        {/* Texto derecho */}
        <div className="md:w-1/2">
          <div className="mb-10">
            <TitleSection textTitle="Nuestro SleepBook" />
          </div>
          <p className="mb-4 text-xl leading-relaxed text-gray-600">
            Este SleepBook,{' '}
            <span className="font-semibold italic text-[--mindsight-accent]">
              &quot;Salud mental para un buen descanso&quot;
            </span>
            , tiene como objetivo explorar la profunda correlación entre estos dos
            aspectos vitales de nuestra vida (la calidad del sueño y nuestra salud
            mental), con el propósito de entregarte información valiosa sobre cómo una
            buena higiene del sueño puede mejorar significativamente nuestra salud mental
            y, a su vez, cómo una salud mental equilibrada puede favorecer un sueño
            reparador.
          </p>
          <p className="mb-4 text-xl leading-relaxed text-gray-600">
            El SleepBook de Mindsight es una guía completa que tiene como objetivo:
          </p>
          <ul className="mb-6 list-inside list-disc text-xl leading-relaxed text-gray-700">
            <li className="marker:text-[--mindsight-accent]">
              Concienciar sobre la importancia del trabajo en la calidad del sueño y
              nuestra salud mental.
            </li>
            <li className="marker:text-[--mindsight-accent]">
              Entregar herramientas prácticas y reflexivas sobre salud mental e higiene
              del sueño.
            </li>
            <li className="marker:text-[--mindsight-accent]">
              Guiar en la construcción, desde un lugar de autoconocimiento y autenticidad,
              de una rutina de higiene del sueño adaptada a tus necesidades.
            </li>
          </ul>
          <button className="bg-mindsight-accent rounded-xl p-3">
            <a
              href="https://mindsight.leadsmasivos.cl/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-xl font-semibold text-white"
            >
              Obten tu Sleepbook aquí!
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SleepBoookSection;
