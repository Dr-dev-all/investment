import { z } from 'zod';

export const userRegisterSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password does not match',
    path: ['confirmPwordass'],
  });

export default userRegisterSchema;
