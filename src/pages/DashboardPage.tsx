import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { LogIn } from 'lucide-react';
import React from 'react';

function DashboardPage() {
    const { onSignOut } = useAuth();
    return (
        <div className="flex flex-col">
            <Button onClick={onSignOut} className="mt-6 w-0" type="submit">
                <LogIn className="text-white" />
            </Button>
            DashboardPage
        </div>
    );
}

export default DashboardPage;
