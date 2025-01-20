import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import {
    HiArrowSmLeft,
    HiArrowSmRight,
    HiChartPie,
    HiShoppingBag,
    HiUser,
    HiViewBoards,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';

function SideBarLayout() {
    return (
        <Sidebar aria-label="Sidebar with content separator example" className="flex flex-1">
            <Sidebar.Items>
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
                    <Link to={'/auth/login'}>
                        <Sidebar.Item href="#" icon={HiArrowSmRight}>
                            Sign In
                        </Sidebar.Item>
                    </Link>
                    <Sidebar.Item href="#" icon={HiArrowSmLeft}>
                        Sign Out
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={BiBuoy}>
                        Help
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}

export default SideBarLayout;
