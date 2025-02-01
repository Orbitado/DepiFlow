import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FirebaseAuth } from '@/services/firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { login, logout } from '@/redux/slices/authSlice';
import { RootState } from '@/redux/store';

export const useCheckAuth = () => {
    const { status } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status !== 'checking') return;

        const unsubscribe = onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) {
                dispatch(logout(null));
                return;
            }

            const { uid, email, displayName, photoURL } = user;
            dispatch(login({ uid, email, displayName, photoURL, errorMessage: null }));
        });

        return () => unsubscribe();
    }, [dispatch, status]);

    return {
        status,
    };
};
