import { signInWithGoogle } from '../firebase/provider';
import { login, logout, checkingCredentials } from './auth/auth-slice';
import { AppDispatch } from './store';

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
