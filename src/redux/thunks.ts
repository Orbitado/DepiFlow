import {
    loginWithEmailAndPassword,
    logoutFirebase,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from '@/services/firebase/firebaseAuth';
import { login, logout, checkingCredentials } from './slices/authSlice';
import { AppDispatch } from './store/store';

export const checkingAuthentication = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());
    };
};

export const checkingGoogleSignIn = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();

        if (result.ok) {
            dispatch(login({ ...result, errorMessage: result.errorMessage || null }));
        } else {
            dispatch(logout(result.errorMessage || null));
        }
    };
};

export const checkingEmailPasswordSignUp = (
    email: string,
    password: string,
    displayName: string
) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        const result = await registerWithEmailAndPassword(email, password, displayName);

        if (result.ok) {
            dispatch(login({ ...result, errorMessage: result.errorMessage || null }));
        } else {
            dispatch(logout(result.errorMessage || null));
        }
    };
};

export const startLoginWithEmailAndPassword = (email: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        const result = await loginWithEmailAndPassword(email, password);

        if (result.ok) {
            dispatch(login({ ...result, errorMessage: result.errorMessage || null }));
        } else {
            dispatch(logout(result.errorMessage || null));
        }
    };
};

export const startLogout = () => {
    return async (dispatch: AppDispatch) => {
        await logoutFirebase();
        dispatch(logout(null));
    };
};
