import { useState } from 'react';

export const useForm = <T extends Record<string, string>>(
    initialForm: T
): T & {
    formState: T;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onResetForm: () => void;
} => {
    const [formState, setFormState] = useState<T>(initialForm);

    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        } as T);
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
};
