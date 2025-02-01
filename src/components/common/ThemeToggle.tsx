import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/redux/slices/themeSlice';
import { selectTheme } from '@/redux/selectors/themeSelectors';
import { Theme } from '@/types';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
    const dispatch = useDispatch();
    const currentTheme = useSelector(selectTheme);

    const handleThemeChange = (theme: Theme) => {
        dispatch(setTheme(theme));
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className="w-[1.2rem] h-[1.2rem] transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute w-[1.2rem] h-[1.2rem] transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleThemeChange('light')}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleThemeChange('dark')}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleThemeChange('system')}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
            <DropdownMenuLabel>Current Theme: {currentTheme}</DropdownMenuLabel>
        </DropdownMenu>
    );
};

export default ThemeToggle;
