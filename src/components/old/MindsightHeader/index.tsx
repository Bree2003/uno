import Image from 'next/image';
import Link from 'next/link';
import { Button, buttonVariants } from '../ui/button';
import navbarItems from '@/utils/navbarItems';

const MindsightHeader = () => {
  return (
    <header className="grow">
      <section className="flex items-center justify-between md:py-2 lg:justify-evenly">
        <Link href="/">
          <Image
            src={'/mindsight-logo-inline.png'}
            alt="Mindsight Logo"
            width={230}
            height={70}
            className="w-40 lg:w-60"
          />
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex w-full justify-evenly gap-y-3">
            {navbarItems.map((item) => (
              <li key={item.name}>
                <Link className={buttonVariants({ variant: 'ghost' })} href={item.route}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button className="hidden rounded-full lg:block">Únete a nosotros</Button>
      </section>
    </header>
  );
};

export default MindsightHeader;
