import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { FirebaseAuth } from '../services/firebase/config';
import { login, logout } from '@/redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';

export const useCheckAuth = () => {
    const { status } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout({ errorMessage: 'User not found' }));
            const { uid, email, displayName, photoURL } = user;
            dispatch(login({ uid, email, displayName, photoURL }));
        });
    }, []);

    return { status };
};
