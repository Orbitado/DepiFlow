import { useDispatch } from 'react-redux';
import {
    checkingEmailPasswordSignUp,
    checkingGoogleSignIn,
    startLoginWithEmailAndPassword,
    startLogout,
} from '@/redux/thunks';
import { AppDispatch } from '@/redux/store/store';

export const useAuth = () => {
    const dispatch = useDispatch<AppDispatch>();

    const onGoogleSignIn = () => {
        dispatch(checkingGoogleSignIn());
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
