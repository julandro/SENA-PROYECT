import z from 'zod';

const userBaseSchema = z.object({
  email: z.email().nonempty(),
  username: z.string().nonempty().toLowerCase(),
  direccion: z.string().nonempty().toLowerCase(),
  celular: z.string().nonempty().toLowerCase(),
  password: z.string().nonempty(),
});

export const registerUserSchema = userBaseSchema.extend({
  acceptedTerms: z.literal(true),
});

export const loginUserSchema = registerUserSchema.extend({
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});
