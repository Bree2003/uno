'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { changePassword } from './actions';
import { Input } from '@/components/old/ui/input';
import {
  PasswordRecoveryInfo,
  passwordRecoverySchema,
} from '@/types/schemas/passwordRecovery.schema';
import { Button } from '@/components/old/ui/button';
import { useToast } from '@/components/old/ui/use-toast';

const PasswordRecovery = () => {
  const router = useRouter();
  const passwordRecoveryParams = useSearchParams();
  const userId = passwordRecoveryParams.get('userId');
  const secret = passwordRecoveryParams.get('secret');

  const { toast } = useToast();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { control, handleSubmit } = useForm<PasswordRecoveryInfo>({
    resolver: zodResolver(passwordRecoverySchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      password: '',
      passwordConfirmation: '',
    },
  });

  const onSubmitPasswordRecovery = async (passwords: PasswordRecoveryInfo) => {
    setIsButtonDisabled(true);
    if (userId && secret) {
      const wasRecoverySuccessfull = await changePassword(
        userId,
        secret,
        passwords.password
      );
      if (wasRecoverySuccessfull) {
        toast({
          title: 'Cambio de contraseña exitoso.',
          description: '¡Y QUE NO SE TE OLVIDE!',
        });
        router.push('/');
      } else {
        toast({
          variant: 'destructive',
          title: 'Error al cambiar tu contraseña',
          description:
            'No se ha podido cambiar tu contraseña. Si el error persiste, contactate con nosotros!',
        });
      }
    }
    setIsButtonDisabled(false);
  };

  return !userId || !secret ? (
    <p className="font-bold">
      Whoooops, parece que buscas algo a lo que no te podemos dejar acceder...
    </p>
  ) : (
    <>
      <div className="space-y-3">
        <Controller
          control={control}
          name="password"
          render={({
            field: { value, onChange, onBlur, ref },
            fieldState: { error, invalid },
          }) => (
            <Input
              name="Contraseña"
              placeholder="Tu contraseña hiper-secreta que no se te olvidara nunca jamas..."
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
              isInvalid={invalid}
              fieldError={error}
            />
          )}
        />
        <Controller
          control={control}
          name="passwordConfirmation"
          render={({
            field: { value, onChange, onBlur, ref },
            fieldState: { error, invalid },
          }) => (
            <Input
              name="Confirma tu contraseña"
              placeholder="Confirmanos tu contraseña hiper-secreta que no se te volvera a olvidar nunca jamas..."
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
              isInvalid={invalid}
              fieldError={error}
            />
          )}
        />
      </div>
      <Button
        onClick={handleSubmit(onSubmitPasswordRecovery)}
        disabled={isButtonDisabled}
      >
        Cambiar contraseña
      </Button>
    </>
  );
};

export default PasswordRecovery;
