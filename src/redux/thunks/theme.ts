import { AppDispatch } from '../store';
import { setTheme } from '../slices/themeSlice';
import { Theme } from '@/types';

export const startSetTheme = (theme: Theme) => {
    return async (dispatch: AppDispatch) => {
        dispatch(setTheme(theme));
    };
};
