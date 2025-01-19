import { FirebaseAuth } from './config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { SignInResult } from '../../types/types';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async (): Promise<SignInResult> => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        if (!result || !result.user) {
            throw new Error('Failed to retrieve user information.');
        }

        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
            uid: uid,
        };
    } catch (error) {
        const errorMessage = (error as Error)?.message || 'An unknown error occurred.';
        return {
            ok: false,
            displayName: null,
            email: null,
            photoURL: null,
            uid: null,
            errorMessage,
        };
    }
};
