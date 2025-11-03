import { z } from 'zod';

export const passwordRecoverySchema = z
  .object({
    password: z
      .string({ required_error: 'Clave requerida' })
      .min(5, 'Tu contraseña debe ser de al menos 5 caracteres'),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Las contraseñas no son iguales',
    path: ['passwordConfirmation'],
  });

export type PasswordRecoveryInfo = z.infer<typeof passwordRecoverySchema>;
