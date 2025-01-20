import { LoginPage } from '@/pages/Auth/LoginPage';
import { Flowbite } from 'flowbite-react';
import Layout from '@/components/layout/Layout';

function App() {
    return (
        <Flowbite>
            <Layout>
                <LoginPage />
            </Layout>
        </Flowbite>
    );
}

export default App;
