import {
    loginWithEmailAndPassword,
    logoutFirebase,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from '@/services/firebase/provider';
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
            dispatch(login(result));
        } else {
            dispatch(logout(result.errorMessage));
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

        const { ok, photoURL, uid, errorMessage } = await registerWithEmailAndPassword(
            email,
            password,
            displayName
        );

        if (ok) {
            dispatch(login({ ok, displayName, email, photoURL, uid, errorMessage }));
        } else {
            dispatch(logout({ ok, photoURL, uid, errorMessage }));
        }
    };
};

export const startLoginWithEmailAndPassword = (email: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        const { ok, photoURL, uid, displayName, errorMessage } = await loginWithEmailAndPassword(
            email,
            password
        );

        if (ok) {
            dispatch(login({ ok, displayName, email, photoURL, uid, errorMessage }));
        } else {
            dispatch(logout({ ok, photoURL, uid, errorMessage }));
        }
    };
};

export const startLogout = () => {
    return async (dispatch: AppDispatch) => {
        await logoutFirebase();
        dispatch(logout({ errorMessage: null }));
    };
};
