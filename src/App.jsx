import { RouterProvider } from "react-router-dom"
import router from "./router/appRouter"
import Navbar from "./components/Navbar/Navbar"

function App() {


  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      {/* <div className="bg-green-500"> heyyyyy</div> */}
    </>
  )
}

export default App
