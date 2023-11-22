import LeftBar from '../components/SideBar/LeftBar'
import Footer from '../components/Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import RightBar from '../components/SideBar/RightBar'
import Navbar from '../components/Header/Navbar'

const Layout = () => {
    const location = useLocation()
    return (
        <div className="font-montserrat bg-black">
            <Navbar />
            {
                location.pathname !== '/' ?
                    <div className="grid grid-cols-6 pt-12">
                        <LeftBar />
                        <div className="col-span-6 overflow-auto max-h-screen lg:col-span-4">
                            <Outlet />
                            <Footer />
                        </div>
                        <RightBar />
                    </div>
                    :
                    <div>
                        <Outlet />
                        <Footer />
                    </div>
            }
        </div>
    )
}

export default Layout