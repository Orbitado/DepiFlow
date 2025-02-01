import { FieldError, Control } from 'react-hook-form';
import { z } from 'zod';
export interface SignInResult {
    ok: boolean;
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
    uid: string | null;
    errorMessage?: string;
}

export type FormInputs = {
    displayName?: string;
    email: string;
    password: string;
};

export interface FormInputProps {
    children: React.ReactNode;
    form: { control: Control };
    errors?: FieldError;
    placeholder?: string;
    type: 'email' | 'password' | 'text' | 'number' | 'tel' | 'url';
}

export interface SignInWithProps {
    children: string;
    icon: React.ReactNode;
    onClick?: () => void;
}

type FormInputType = z.infer<typeof userSchema>;

export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    uid: string | null;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    errorMessage: string | null;
}

export type Theme = 'dark' | 'light' | 'system';

export type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

export type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};
