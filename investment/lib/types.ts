import { z } from 'zod';
import isEmail from 'validator/lib/isEmail';

export const userRegisterSchema = z
  .object({
    firstName: z
      .string()
      .includes(' ', { message: 'Firstname must be provided' }),
    lastName: z
      .string()
      .includes(' ', { message: 'Lastname must be provided' }),
    email: z.string().email({ message: 'PLease use a valid mail address' }),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z
      .string()
      .includes(' ', { message: 'confirmation data must be provided' }),
  })
  .refine((data) => data.password !== data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Passwords don't match",
  });

export default userRegisterSchema;
