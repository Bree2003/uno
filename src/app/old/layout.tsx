import type { Metadata } from 'next';
import '@/styles/globals.css';
import { raleway } from '../fonts';
import { cn } from '@/utils/cn';
import HideOnScrollHeader from '@/components/old/HideOnScrollHeader';
import MindsightHeader from '@/components/old/MindsightHeader';
import { Toaster } from '@/components/old/ui/toaster';

export const metadata: Metadata = {
  title: 'Mindsight',
  description: 'Mindsight',
  other: {
    'google-site-verification': 'yCTE2PpW4adC8m0kt53Tcf_v_8Vz9MAp0o59ib5-PTc',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={cn(raleway.className, 'w-full')}>
        <HideOnScrollHeader>
          <MindsightHeader />
        </HideOnScrollHeader>
        <main className="w-full overflow-x-clip">{children}</main>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
