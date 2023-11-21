import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import LeftBar from "./components/SideBar/LeftBar"
import RightBar from "./components/SideBar/RightBar"

function App() {
  const location = useLocation()
  return (
    <>
      <div className="font-montserrat bg-black">
        <Navbar />
        {
          location.pathname !== '/' ?
            <div className="grid grid-cols-6 pt-12">
              <LeftBar />
              <Outlet />
              <RightBar />
            </div> :
            <>
              <Outlet />
              <Footer />
            </>
        }

      </div>
    </>
  )
}

export default App
