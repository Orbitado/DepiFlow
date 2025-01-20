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

function SideBarLayout() {
    return (
        <Sidebar aria-label="Sidebar with content separator example" className="absolute h-full">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        Panel de Control
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        Clientes
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiShoppingBag}>
                        Citas
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiViewBoards}>
                        Historial
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiArrowSmRight}>
                        Sign In
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiArrowSmLeft}>
                        Sign Up
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
