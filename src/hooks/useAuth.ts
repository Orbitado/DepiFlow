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
        console.log('Calling onGoogleSignIn');
        dispatch(checkingGoogleSignIn());
    };

    const onEmailPasswordSignUp = (email: string, password: string, displayName: string) => {
        console.log('Calling onEmailPasswordSignUp', { email, password, displayName });
        dispatch(checkingEmailPasswordSignUp(email, password, displayName));
    };

    const onEmailPasswordSignIn = (email: string, password: string) => {
        console.log('Calling onEmailPasswordSignIn', { email, password });
        dispatch(startLoginWithEmailAndPassword(email, password));
    };

    return {
        onGoogleSignIn,
        onEmailPasswordSignUp,
        onEmailPasswordSignIn,
    };
};
