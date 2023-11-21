import React from 'react'
import logo from '../../assets/5_1.png'
import SearchIcon from '../../assets/search2line.svg'
import RegisterButton from '../Modals/Register'
import LoginButton from '../Modals/Login'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const navList = [
        { name: "Sports", href: '/sports' },
        { name: "Casino", href: '/casino' },
        { name: "Inplay", href: '/inplay' }
    ]
    return (
        <div className='flex justify-between bg-primary text-white fixed w-full'>
            <div className='flex'>
                <div className='p-0'>
                    <img src={logo} className='h-10' alt="Logo" />
                </div>

                <div className='pt-1.5 font-bold text-lg'>BETZHUB</div>

                {/* <div className='p-3'>
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <img src={SearchIcon} alt="Search" className='w-4 h-4' />
                        </div>
                        <input type="search" id="default-search" className="block w-full p-2 ps-10 text-xs text-gray-300 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-slate-800" placeholder="Events market, and more" required />
                    </div>
                </div> */}

            </div>

            <div className='p-1.5 md:block hidden'>
                <ul className='flex space-x-6 text-sm'>
                    {navList?.map((item) =>
                        <Link to={item?.href} className='hover:bg-gray-100 hover:text-gray-800 transition duration-300 px-3 py-1 rounded-md' key={item.href}>{item?.name}</Link>
                    )}
                </ul>
            </div>

            <div className='flex space-x-1 md:space-x-3 p-1.5 text-xs' style={{fontSize: '12px'}}>
                <LoginButton />
                <RegisterButton />
            </div>
        </div>
    )
}

export default Navbar