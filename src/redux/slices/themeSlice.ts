import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme, ThemeState } from '@/types';

const initialState: ThemeState = {
    theme: 'system',
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
