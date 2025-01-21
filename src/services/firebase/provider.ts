import { FirebaseAuth } from './config';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { SignInResult } from '@/types';

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

export const registerWithEmailAndPassword = async (
    email: string,
    password: string,
    displayName: string
) => {
    try {
        const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);

        if (!result || !result.user) {
            throw new Error('Failed to retrieve user information.');
        }

        const { uid, photoURL } = result.user;

        await updateProfile(FirebaseAuth.currentUser!, {
            displayName,
        });

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
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

export const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);

        if (!result || !result.user) {
            throw new Error('Failed to retrieve user information.');
        }

        const { uid, photoURL, displayName } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
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

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
};
