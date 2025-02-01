import { configureStore } from '@reduxjs/toolkit';
import { authSlice, themeSlice } from '@/redux/slices';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        theme: themeSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
