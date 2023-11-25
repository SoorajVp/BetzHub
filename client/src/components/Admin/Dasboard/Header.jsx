import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../../contexts/AdminContext";
import CreateAdmin from "../Modals/CreateAdmin";

const Header = () => {
  const { admin, setAdmin } = useContext(AdminContext);
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("betzhubAdminToken")) {
      const adminData = localStorage.getItem('betzhubAdmin');
      setAdmin(JSON.parse(adminData))
    } else {
      navigate('/')
    }
  }, [navigate])


  console.log(admin)

  return (
    <header>
      <nav className="border-gray-200 text-white px-4 lg:px-6 py-2.5 bg-primary">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap">{ admin?.role}</span>
          </a>
          <div className="flex items-center lg:order-2">
            <a href="#" className="text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ">Log out</a>
            {/* <a href="#" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a> */}
            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              
              <li>
                <a href="#" className="block py-2 px-3 text-gray-100 hover:text-primary hover:bg-gray-100 lg:border-0 lg:hover:text-primary-700 lg:px-3 lg:py-1 rounded-md">Dashboard</a>
              </li>
              <li>
                <CreateAdmin />
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-100 hover:text-primary hover:bg-gray-100 lg:border-0 lg:hover:text-primary-700 lg:px-3 lg:py-1 rounded-md">Features</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-100 hover:text-primary hover:bg-gray-100 lg:border-0 lg:hover:text-primary-700 lg:px-3 lg:py-1 rounded-md">Team</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-100 hover:text-primary hover:bg-gray-100 lg:border-0 lg:hover:text-primary-700 lg:px-3 lg:py-1 rounded-md">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header