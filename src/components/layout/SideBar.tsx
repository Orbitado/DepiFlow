import { useAuth } from '@/hooks/useAuth';
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiShoppingBag, HiUser, HiViewBoards } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function SideBarLayout() {
    const { onSignOut } = useAuth();
    return (
        <Sidebar aria-label="Sidebar with content separator example">
            <Sidebar.Items>
                <Sidebar.ItemGroup className="">
                    <Sidebar.Item href="#" icon={HiHome}>
                        DepiFlow
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Link to={'/dashboard'}>
                        <Sidebar.Item icon={HiChartPie}>Panel de Control</Sidebar.Item>
                    </Link>
                    <Link to={'/clients'}>
                        <Sidebar.Item href="#" icon={HiUser}>
                            Clientes
                        </Sidebar.Item>
                    </Link>
                    <Link to={'/appointments'}>
                        <Sidebar.Item href="#" icon={HiShoppingBag}>
                            Citas
                        </Sidebar.Item>
                    </Link>
                    <Link to={'/history'}>
                        <Sidebar.Item href="#" icon={HiViewBoards}>
                            Historial
                        </Sidebar.Item>
                    </Link>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Sidebar.Item onClick={onSignOut} icon={HiArrowSmRight}>
                        Sign Out
                    </Sidebar.Item>
                    <Sidebar.Item icon={BiBuoy}>Help</Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}

export default SideBarLayout;
