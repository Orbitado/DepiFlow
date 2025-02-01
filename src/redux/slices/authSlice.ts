import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '@/types';

const initialState: AuthState = {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<Omit<AuthState, 'status'>>) => {
            state.status = 'authenticated';
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.photoURL = action.payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, action: PayloadAction<string | null>) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = action.payload;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        },
    },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
