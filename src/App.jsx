import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <div className="font-montserrat bg-black">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
