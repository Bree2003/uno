'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { accountDeletion } from './actions';
import {
  AccountDeletionSchemaType,
  accountDeletionSchema,
} from '@/types/schemas/accountDeletion.schema';
import { useToast } from '@/components/old/ui/use-toast';
import { Input } from '@/components/old/ui/input';
import { Button } from '@/components/old/ui/button';

const AccountDeletion = () => {
  const router = useRouter();

  const { toast } = useToast();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { control, handleSubmit } = useForm<AccountDeletionSchemaType>({
    resolver: zodResolver(accountDeletionSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmitAccountDeletionRequest = async (account: AccountDeletionSchemaType) => {
    setIsButtonDisabled(true);
    const wasRecoverySuccessfull = await accountDeletion(account.email, account.password);
    if (wasRecoverySuccessfull) {
      toast({
        title: 'Cuenta borrada exitosamente.',
        description:
          'Tu cuenta se ha borrado en conjunto con los datos asociados a ella.',
      });
      router.push('/');
    } else {
      toast({
        variant: 'destructive',
        title: 'Error al eliminar tu cuenta',
        description:
          'No se ha podido eliminar tu cuenta. Si el error persiste, contactate con nosotros!',
      });
    }
    setIsButtonDisabled(false);
  };

  return (
    <>
      <div className="space-y-3">
        <Controller
          control={control}
          name="email"
          render={({
            field: { value, onChange, onBlur, ref },
            fieldState: { error, invalid },
          }) => (
            <Input
              name="Email"
              placeholder="Tu email"
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
          name="password"
          render={({
            field: { value, onChange, onBlur, ref },
            fieldState: { error, invalid },
          }) => (
            <Input
              name="Contraseña"
              placeholder="Tu contraseña"
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
        onClick={handleSubmit(onSubmitAccountDeletionRequest, () => console.log('aaaa'))}
        disabled={isButtonDisabled}
      >
        eliminar cuenta
      </Button>
    </>
  );
};

export default AccountDeletion;
