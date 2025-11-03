import Image from 'next/image';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { Separator } from '../ui/separator';

const UnderConstruction = () => {
  return (
    <div className="grid min-h-screen animate-background-cycle grid-flow-col grid-rows-6 gap-2 bg-gradient-dynamic px-10 pt-10 lg:p-0">
      <main className="row-span-4 flex flex-col items-center gap-4 self-center text-center lg:row-span-2 lg:row-start-3">
        <div className="w-fit">
          <Image
            src={'/mindsight-logo-inline.png'}
            alt="logo-enzabezado"
            width={852}
            height={181}
            className="hidden lg:block"
          />
          <Image
            src={'/mindsight-logo-stacked.png'}
            alt="logo-enzabezado"
            width={300}
            height={175}
            className="lg:hidden"
          />
        </div>
        <h1 className="text-xl lg:text-5xl lg:font-thin">Página en construcción</h1>
        <Separator className="max-w-xs" />
        <p className="max-w-4xl text-sm font-extralight lg:text-2xl">
          No estás solo(a)! Nuestra comunidad puede ayudarte. Actualmente el 40% de la
          población mundial sufre de problemas de sueño.
        </p>
      </main>
      <aside className="row-start-5 h-fit self-end">
        <div className="flex justify-center gap-6">
          <a
            href="https://www.instagram.com/mindsight.cl/"
            className="text-4xl lg:text-6xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://chat.whatsapp.com/B4zcmA1ldTtHsbZBm6dQl1"
            className="text-4xl lg:text-6xl"
          >
            <FaWhatsapp />
          </a>
        </div>
        <p className="mt-2 text-center text-sm font-extralight lg:text-2xl">
          Únete a nuestras redes sociales.
        </p>
      </aside>
    </div>
  );
};

export default UnderConstruction;
