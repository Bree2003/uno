import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

interface MindsightFooterProps {
  children?: ReactNode;
}

const MindsightFooter = (props: MindsightFooterProps) => {
  const { children } = props;
  return (
    <footer className="bg-gradient-night">
      {children}
      <div className="mx-auto flex w-3/4 flex-col gap-3 border-b py-4 md:flex-row md:justify-between">
        <div className="flex grow flex-col gap-3 md:grow-0 md:gap-4">
          <div className="w-40">
            <Image
              src={'/mindsight-logo-inline.png'}
              alt="Mindsight Logo"
              width={230}
              height={60}
              className="flex"
            />
          </div>
          <p className="text-xs md:text-base">Calidad de sueño es calidad de vida.</p>
          <ul className="flex justify-start gap-4 md:gap-5">
            <Link href="https://chat.whatsapp.com/B4zcmA1ldTtHsbZBm6dQl1k">
              <FaWhatsapp className="size-5 md:size-8" />
            </Link>
            <Link href="https://www.linkedin.com/company/mindsight-cl/about/">
              <FaLinkedinIn className="size-5 md:size-8" />
            </Link>
            <Link href="https://www.instagram.com/mindsight.cl/">
              <FaInstagram className="size-5 md:size-8" />
            </Link>
          </ul>
        </div>
        <div className="flex grow flex-wrap justify-around gap-2 md:grow-0 md:flex-col md:gap-1">
          <Link href="/privacyPolicy" className="text-xs md:text-base">
            Politica de privacidad
          </Link>
        </div>
      </div>
      <div className="h-fit self-end pb-4 pt-4">
        <p className="text-center text-xs font-extralight lg:text-sm">
          Mindsight © {new Date().getFullYear()}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default MindsightFooter;
