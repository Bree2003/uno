import type { Metadata } from 'next';
import '@/styles/globals.css';
import { raleway } from './fonts';
import { cn } from '@/utils/cn';

export const metadata: Metadata = {
  title: 'Mindsight',
  description: 'Mindsight',
  other: {
    'google-site-verification': 'yCTE2PpW4adC8m0kt53Tcf_v_8Vz9MAp0o59ib5-PTc',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es">
      <body className={cn(raleway.className, 'w-full')}>
        <main className="bg-mindsight-main w-full overflow-x-clip">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
