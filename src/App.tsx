import { LoginPage } from '@/pages/Auth/LoginPage';
import { Flowbite } from 'flowbite-react';
import NavBarLayout from '@/components/layout/NavBar';
import BreadCrumbLayout from './components/layout/Breadcrumb';
import SideBarLayout from './components/layout/SideBar';

function App() {
    return (
        <Flowbite>
            <NavBarLayout />
            <BreadCrumbLayout />
            <SideBarLayout />
            <LoginPage />
        </Flowbite>
    );
}

export default App;
