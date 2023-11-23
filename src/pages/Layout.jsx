import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import LeftBar from '../components/SideBar/LeftBar';
import RightBar from '../components/SideBar/RightBar';
import Navbar from '../components/Header/TopNavbar';
import MainFooter from '../components/Footer/MainFooter';
import MiniFooter from '../components/Footer/MiniFooter';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Layout = () => {
    const { isAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    // useEffect(() => {
    //     if (!isAuth && location.pathname !== '/') {
    //         navigate('/');
    //     }
    // }, [isAuth, location, navigate]);

    return (
        <div className="font-montserrat bg-black">
            <Navbar />
            {location.pathname !== '/' ? (
                <div className="grid grid-cols-6 pt-12">
                    <LeftBar />
                    <div className="col-span-6 overflow-auto max-h-screen lg:col-span-4">
                        <Outlet />
                        <MainFooter />
                    </div>
                    <RightBar />
                </div>
            ) : (
                <div>
                    <Outlet />
                    <MiniFooter />
                    <MainFooter />
                </div>
            )}
        </div>
    );
};

export default Layout;