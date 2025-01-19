export const LoginPage = () => {
    return (
        <>
            <form className="flex flex-col justify-center mx-auto max-w-sm h-[calc(100vh-4rem)]">
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block mb-2 font-medium text-gray-900 text-sm dark:text-white"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="block border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-2.5 border focus:border-blue-500 dark:focus:border-blue-500 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-500 w-full text-gray-900 text-sm dark:text-white dark:placeholder-gray-400"
                        placeholder="name@email.com"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block mb-2 font-medium text-gray-900 text-sm dark:text-white"
                    >
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="block border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-2.5 border focus:border-blue-500 dark:focus:border-blue-500 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-500 w-full text-gray-900 text-sm dark:text-white dark:placeholder-gray-400"
                        required
                    />
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 border rounded focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800 dark:ring-offset-gray-800 w-4 h-4"
                            required
                        />
                    </div>
                    <label
                        htmlFor="remember"
                        className="font-medium text-gray-900 text-sm dark:text-gray-300 ms-2"
                    >
                        Remember me
                    </label>
                </div>
                <button
                    type="submit"
                    className="bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-700 dark:bg-blue-600 px-5 py-2.5 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 w-full sm:w-auto font-medium text-center text-sm text-white focus:outline-none"
                >
                    Submit
                </button>
            </form>
        </>
    );
};
