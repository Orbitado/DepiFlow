import { useDispatch } from 'react-redux';
import {
    checkingEmailPasswordSignUp,
    checkingGoogleSignIn,
    startLoginWithEmailAndPassword,
} from '../utils/store/thunks';
import { AppDispatch } from '../utils/store/store';

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

    const onEmailPasswordSignIn = (email: string, password: string) => {
        dispatch(startLoginWithEmailAndPassword(email, password));
    };

    return {
        onGoogleSignIn,
        onEmailPasswordSignUp,
        onEmailPasswordSignIn,
    };
};
