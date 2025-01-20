import { useDispatch } from 'react-redux';
import {
    checkingEmailPasswordSignUp,
    checkingGoogleSignIn,
    startLoginWithEmailAndPassword,
} from '@/redux/thunks';
import { AppDispatch } from '@/redux/store';

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

    return {
        onGoogleSignIn,
        onEmailPasswordSignUp,
        onEmailPasswordSignIn,
    };
};
