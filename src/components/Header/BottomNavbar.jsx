
const BottomNavbar = () => {
    return (
        <nav className="fixed bottom-0 left-0 w-full bg-gray-800 p-4 text-white">
            <div className="container mx-auto">
                {/* Navbar content goes here */}
                <ul className="flex justify-between">
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default BottomNavbar;
