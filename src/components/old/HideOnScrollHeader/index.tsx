'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import Headroom from 'react-headroom';
import { MenuIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet';
import navbarItems from '@/utils/navbarItems';

interface HideOnScrollHeaderProps {
  children: ReactNode;
}

const HideOnScrollHeader = (props: HideOnScrollHeaderProps) => {
  const { children } = props;

  return (
    <>
      <Headroom className="absolute left-0 right-0 z-10 max-w-full">
        <div className="flex items-center justify-between p-5">
          {children}
          <Sheet>
            <SheetTrigger asChild>
              <Button className="shrink-0 px-2 lg:hidden" variant="ghost">
                <MenuIcon className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <ul className="">
                {navbarItems.map((item) => (
                  <li key={item.name}>
                    <SheetClose asChild>
                      <Link className="text-night" href={item.route}>
                        {item.name}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </Headroom>
    </>
  );
};

export default HideOnScrollHeader;
