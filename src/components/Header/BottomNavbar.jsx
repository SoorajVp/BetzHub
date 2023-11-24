import { Link } from "react-router-dom";

const BottomNavbar = () => {
    return (
        <nav className="md:hidden fixed bottom-0 z-20 rounded-t-xl border-t border-primary left-0 w-full bg-gray-200 p-4 text-primary">
            <div className="container mx-auto text-xs">
                {/* Navbar content goes here */}
                <ul className="flex justify-between font-medium">
                    <li>
                        <Link to='/sports' className="hover:bg-primary transition duration-300 hover:text-white rounded-lg py-2 px-4">
                            Sports
                        </Link>
                    </li>
                    <li>
                        <Link to='/casino' className="hover:bg-primary transition duration-300 hover:text-white rounded-lg py-2 px-4">
                            Inplay
                        </Link>
                    </li>
                    <li>
                        <Link to='/inplay' className="hover:bg-primary transition duration-300 hover:text-white rounded-lg py-2 px-4">
                            Casino
                        </Link>
                    </li>
                    <li>
                        <Link to='/user-profile' className="hover:bg-primary transition duration-300 hover:text-white rounded-lg py-2 px-4">
                            Account
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default BottomNavbar;
