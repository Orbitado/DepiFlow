function Loader({ message = 'Cargando...' }) {
    return (
        <div className="flex justify-center items-center bg-gray-100 h-screen">
            <div className="flex flex-col items-center">
                <div className="border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
                <p className="mt-4 text-gray-600">{message}</p>
            </div>
        </div>
    );
}

export default Loader;
