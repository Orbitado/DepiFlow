import React from 'react';

export const ClientsPage = () => {
    return (
        <>
            <div className="relative shadow-md sm:rounded-lg overflow-x-auto">
                <table className="rtl:text-right w-full text-gray-500 text-left text-sm dark:text-gray-400">
                    <thead className="bg-gray-50 dark:bg-gray-700 text-gray-700 text-xs dark:text-gray-400 uppercase">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre completo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">Email</div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">Teléfono</div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">Próxima cita</div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Editar</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="dark:border-gray-700 bg-white dark:bg-gray-800 border-b">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>
                            <td className="text-right px-6 py-4">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr className="dark:border-gray-700 bg-white dark:bg-gray-800 border-b">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                                Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">White</td>
                            <td className="px-6 py-4">Laptop PC</td>
                            <td className="px-6 py-4">$1999</td>
                            <td className="text-right px-6 py-4">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">Black</td>
                            <td className="px-6 py-4">Accessories</td>
                            <td className="px-6 py-4">$99</td>
                            <td className="text-right px-6 py-4">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
