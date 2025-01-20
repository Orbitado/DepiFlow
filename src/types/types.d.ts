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
