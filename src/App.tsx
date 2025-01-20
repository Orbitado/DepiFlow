import { Flowbite } from 'flowbite-react';
import Layout from '@/components/layout/Layout';
import { AppRouter } from './router/AppRouter';

function App() {
    return (
        <Flowbite>
            <Layout>
                <AppRouter />
            </Layout>
        </Flowbite>
    );
}

export default App;
