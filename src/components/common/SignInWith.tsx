import React from 'react';
import { Button } from '../ui/button';
import { SignInWithProps } from '@/types';

function SignInWith({ children, icon, onClick }: SignInWithProps) {
    return (
        <Button
            className="justify-center items-center gap-2 w-full"
            variant="outline"
            onClick={onClick}
        >
            {icon}
            <span>{children}</span>
        </Button>
    );
}

export default SignInWith;
