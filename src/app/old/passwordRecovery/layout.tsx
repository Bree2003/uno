import { Suspense } from 'react';
import { Card } from '@/components/old/ui/card';

const PasswordRecoveryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-svh animate-background-cycle items-center justify-center bg-gradient-dynamic">
      <Card className="w-3/4 flex-col space-y-6 px-6 py-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-night">Recupera tu contraseña</h1>
          <p>
            Por que sabemos que a veces las cosas se pueden olvidar por falta de sueño.
          </p>
        </div>
        <Suspense fallback={<div>Cargando...</div>}>{children}</Suspense>
      </Card>
    </div>
  );
};

export default PasswordRecoveryLayout;
