import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme, ThemeProviderState } from '@/types';

const initialState: ThemeProviderState = {
    theme: 'system',
    setTheme: () => null,
};

export const themeSlice = createSlice({
    name: 'ui-theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload;
        },
    },
});

export const { setTheme } = themeSlice.actions;
