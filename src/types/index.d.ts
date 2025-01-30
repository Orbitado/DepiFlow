import { FieldError, Control } from 'react-hook-form';
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
