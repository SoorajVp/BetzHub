import { Outlet, useLocation } from 'react-router-dom';
import RightBar from '../components/SideBar/RightBar/RightBar';
import MainFooter from '../components/Footer/MainFooter';
import MiniFooter from '../components/Footer/MiniFooter';
import TopNavbar from '../components/Header/TopNavbar';
import BottomNavbar from '../components/Header/BottomNavbar';
import LeftBar from '../components/SideBar/LeftBar/LeftBar';

const Layout = () => {
    const location = useLocation();

    return (
        <div className="font-montserrat bg-black">
            <TopNavbar />
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
            <BottomNavbar />
        </div>
    );
};

export default Layout;