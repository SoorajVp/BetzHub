import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/5_1.png'
import SearchIcon from '../../assets/search2line.svg'
import WalletIcon from '../../assets/wallet3line.svg'
import addBoxIcon from '../../assets/addboxline.svg'
import arrowIcon from '../../assets/group-1521.svg'
import userIcon from '../../assets/user3fill.svg'
import settingIcon from '../../assets/settings3line.svg'
import RegisterButton from '../Modals/Register'
import LoginButton from '../Modals/Login'

const navList = [
    { name: "Sports", href: '/sports' },
    { name: "Casino", href: '/casino' },
    { name: "Inplay", href: '/inplay' }
]

const Navbar = () => {

    const [isLoggedIn, setLoggedin] = useState(true);
    const location = useLocation()

    return (
        <div className='flex justify-between bg-primary text-white fixed w-full p-1'>
            <div className='flex'>
                <div className=''>
                    <Link to='/'>
                        <img src={logo} className='h-12 w-12 -mt-1.5' alt="Logo" />
                    </Link>
                </div>

                {isLoggedIn ?
                    <div className='py-1 hidden md:block'>
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <img src={SearchIcon} alt="Search" className='w-4 h-4' />
                            </div>
                            <input type="search" id="default-search" className="block w-full p-2 ps-10 text-xs text-gray-300 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-slate-800" placeholder="Events market, and more" required />
                        </div>
                    </div> :
                    <div className='pt-1.5 font-bold text-lg'>BETZHUB</div>
                }

            </div>

            <div className='p-1.5 md:block hidden'>
                <ul className='flex space-x-6 text-sm font-medium'>
                    {navList?.map((item) =>
                        <Link to={item?.href} className={`${location.pathname == item?.href && 'bg-gray-50 text-gray-800'} hover:bg-gray-50 hover:text-gray-800 transition duration-300 px-3 py-1 rounded`} key={item.href}>
                            {item?.name}
                        </Link>
                    )}
                </ul>
            </div>

            <div className='flex space-x-1 md:space-x-3 p-1.5 text-xs' style={{ fontSize: '12px' }}>
                {
                    isLoggedIn ?
                        <>
                            <button className='bg-red-400 px-2 m-0.5 font-bold rounded'>
                                <div className='flex gap-1'>
                                    <img src={WalletIcon} alt="Wallet" className='w-4' />
                                    <p className='text-xs'>0.00</p>
                                    <img src={arrowIcon} alt="Wallet" className='w-4 ml-1' />
                                </div>
                            </button>
                            <button className='bg-red-400 px-2 m-0.5 font-bold rounded'>
                                <div className='flex gap-1'>
                                    <img src={addBoxIcon} alt="Wallet" className='w-4' />
                                    <p className='text-xs'>Deposit</p>
                                </div>
                            </button>
                            <img src={settingIcon} alt="Wallet" className='w-6' />
                            <img src={userIcon} alt="Wallet" className='w-5 border-2 m-1 rounded-sm' />
                        </> :
                        <>
                            <LoginButton />
                            <RegisterButton />
                        </>
                }



            </div>
        </div>
    )
}

export default Navbar