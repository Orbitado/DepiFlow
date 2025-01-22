import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { FirebaseAuth } from '../services/firebase/firebaseConfig';
import { login, logout } from '@/redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';

export const useCheckAuth = () => {
    const { status } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            try {
                if (!user) {
                    dispatch(logout({ errorMessage: 'User not found' }));
                    return;
                }

                const { uid, email, displayName, photoURL } = user;
                dispatch(login({ uid, email, displayName, photoURL }));
            } catch (error) {
                console.error('Error in useCheckAuth', error);
                dispatch(logout({ errorMessage: 'An unknown error occurred.' }));
            }
        });
    }, [dispatch]);

    return { status };
};
