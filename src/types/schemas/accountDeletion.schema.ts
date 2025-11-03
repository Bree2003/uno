import { z } from 'zod';

export const accountDeletionSchema = z.object({
  email: z
    .string({ required_error: 'Por favor ingresa tu email' })
    .email('Email invalido'),
  password: z
    .string({ required_error: 'Clave requerida' })
    .min(5, 'Tu contraseña debe ser de al menos 5 caracteres'),
});

export type AccountDeletionSchemaType = z.infer<typeof accountDeletionSchema>;
