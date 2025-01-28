import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';
import {
    HiArrowCircleLeft,
    HiChartPie,
    HiQuestionMarkCircle,
    HiShoppingBag,
    HiUser,
    HiViewBoards,
} from 'react-icons/hi';

function SideBarLayout() {
    const { onSignOut } = useAuth();
    return (
        <>
            <aside
                id="separator-sidebar"
                // this may be changed in a future because it is not responsive
                className="sm:block hidden w-64 h-screen"
                aria-label="Sidebar"
            >
                <div className="bg-gray-50 dark:bg-gray-800 px-3 py-4 h-full overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link
                                to="/dashboard"
                                className="group flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg text-gray-900 dark:text-white"
                            >
                                <HiChartPie className="group-hover:text-gray-900 dark:group-hover:text-white w-5 h-5 text-gray-500 dark:text-gray-400 transition duration-75 shrink-0" />
                                <span className="ms-3">Panel de Control</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/clients"
                                className="group flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg text-gray-900 dark:text-white"
                            >
                                <HiUser className="group-hover:text-gray-900 dark:group-hover:text-white w-5 h-5 text-gray-500 dark:text-gray-400 transition duration-75 shrink-0" />
                                <span className="flex-1 whitespace-nowrap ms-3">Clientes</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/appointments"
                                className="group flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg text-gray-900 dark:text-white"
                            >
                                <HiShoppingBag className="group-hover:text-gray-900 dark:group-hover:text-white w-5 h-5 text-gray-500 dark:text-gray-400 transition duration-75 shrink-0" />
                                <span className="flex-1 whitespace-nowrap ms-3">Citas</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/history"
                                className="group flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg text-gray-900 dark:text-white"
                            >
                                <HiViewBoards className="group-hover:text-gray-900 dark:group-hover:text-white w-5 h-5 text-gray-500 dark:text-gray-400 transition duration-75 shrink-0" />
                                <span className="flex-1 whitespace-nowrap ms-3">Historial</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="space-y-2 border-gray-200 dark:border-gray-700 mt-4 pt-4 border-t font-medium">
                        <li>
                            <Link
                                to="#"
                                onClick={onSignOut}
                                className="group flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg text-gray-900 dark:text-white"
                            >
                                <HiArrowCircleLeft className="group-hover:text-gray-900 dark:group-hover:text-white w-5 h-5 text-gray-500 dark:text-gray-400 transition duration-75 shrink-0" />
                                <span className="flex-1 whitespace-nowrap ms-3">Sign Out</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="group flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg text-gray-900 dark:text-white transition duration-75"
                            >
                                <HiQuestionMarkCircle className="group-hover:text-gray-900 dark:group-hover:text-white w-5 h-5 text-gray-500 dark:text-gray-400 transition duration-75 shrink-0" />
                                <span className="ms-3">Help</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default SideBarLayout;
