import { z } from 'zod';

export const userSchema = z.object({
    email: z
        .string({
            required_error: 'Please enter your email address.',
            invalid_type_error: 'Email must be a valid text value.',
        })
        .trim()
        .toLowerCase()
        .email({
            message: 'Please enter a valid email address (e.g., example@mail.com).',
        })
        .refine((email) => email.includes('@') && email.split('@')[1].includes('.'), {
            message: 'The email must contain a valid domain (e.g., @gmail.com).',
        }),
    password: z
        .string({
            required_error: 'Please enter your password.',
            invalid_type_error: 'Password must be a valid text value.',
        })
        .min(6, {
            message: 'Your password must be at least 6 characters long.',
        })
        .max(20, {
            message: 'Your password cannot exceed 20 characters.',
        })
        .regex(/[A-Z]/, {
            message: 'Your password must include at least one uppercase letter (A-Z).',
        })
        .regex(/[a-z]/, {
            message: 'Your password must include at least one lowercase letter (a-z).',
        })
        .regex(/[0-9]/, {
            message: 'Your password must include at least one number (0-9).',
        })
        .regex(/[\W_]/, {
            message:
                'Your password must include at least one special character (@, $, !, %, etc.).',
        })
        .refine((password) => !/\s/.test(password), {
            message: 'Your password cannot contain spaces.',
        }),
});
