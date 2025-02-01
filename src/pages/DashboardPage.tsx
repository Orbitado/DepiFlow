import ThemeToggle from '@/components/common/ThemeToggle';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { LogIn } from 'lucide-react';
import React from 'react';

function DashboardPage() {
    const { onSignOut } = useAuth();
    return (
        <div className="flex flex-col">
            <Button onClick={onSignOut} className="w-fit" type="submit">
                <LogIn className="text-white" />
            </Button>
            <ThemeToggle />
            DashboardPage
        </div>
    );
}

export default DashboardPage;
