export const authService = {
    async registerUser(
        email: string,
        password: string,
        displayName: string,
        onEmailPasswordSignUp: (
            email: string,
            password: string,
            displayName: string
        ) => Promise<void>
    ) {
        if (!email.trim() || !password.trim() || !displayName.trim()) {
            throw new Error('Todos los campos son obligatorios');
        }

        try {
            await onEmailPasswordSignUp(email.trim(), password.trim(), displayName.trim());
            return { success: true };
        } catch (error) {
            throw new Error(error as string);
        }
    },
    async loginUser(
        email: string,
        password: string,
        onEmailPasswordSignIn: (email: string, password: string) => Promise<void>
    ) {
        if (!email.trim() || !password.trim()) {
            throw new Error('Todos los campos son obligatorios');
        }
        try {
            await onEmailPasswordSignIn(email.trim(), password.trim());
            return { success: true };
        } catch (error) {
            throw new Error(error as string);
        }
    },
};
