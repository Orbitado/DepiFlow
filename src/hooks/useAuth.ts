import { useDispatch } from 'react-redux';
import {
    checkingEmailPasswordSignUp,
    checkingGoogleSignIn,
    startLoginWithEmailAndPassword,
    startLogout,
} from '@/redux/thunks';
import { AppDispatch } from '@/redux/store';
import { useNavigate } from 'react-router-dom';
import { useCheckAuth } from './useCheckAuth';

export const useAuth = () => {
    const { status } = useCheckAuth();
    const routerNavigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const onGoogleSignIn = async () => {
        try {
            await dispatch(checkingGoogleSignIn());

            const isAuthenticated = status === 'authenticated';

            if (!isAuthenticated) {
                throw new Error('Failed to sign in with Google.');
            } else {
                routerNavigate('/');
            }
        } catch (error) {
            console.error('Google sign-in failed:', error);
        }
    };

    const onEmailPasswordSignUp = async (
        email: string,
        password: string,
        displayName: string
    ): Promise<void> => {
        dispatch(checkingEmailPasswordSignUp(email, password, displayName));
    };

    const onEmailPasswordSignIn = async (email: string, password: string) => {
        dispatch(startLoginWithEmailAndPassword(email, password));
    };

    const onSignOut = () => {
        dispatch(startLogout());
    };

    return {
        onGoogleSignIn,
        onEmailPasswordSignUp,
        onEmailPasswordSignIn,
        onSignOut,
    };
};
