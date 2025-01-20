import { LoginPage } from '@/pages/Auth/LoginPage';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

function App() {
    return (
        <Flowbite>
            <DarkThemeToggle />
            <LoginPage />
        </Flowbite>
    );
}

export default App;
