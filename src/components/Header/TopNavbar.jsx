import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/5_1.png';
import WalletIcon from '../../assets/wallet3line.svg';
import addBoxIcon from '../../assets/addboxline.svg';
import arrowIcon from '../../assets/group-1521.svg';
import userIcon from '../../assets/user3fill.svg';
import settingIcon from '../../assets/settings3line.svg';
import logoutIcon from '../../assets/logout-33.svg';
import RegisterButton from '../Modals/Register';
import LoginButton from '../Modals/Login';
import { UserOptions } from '../../constants/userOptions';
import SearchBar from './SearchBar';
import CarouselBar from './CarouselBar';

const navList = [
    { name: 'Sports', href: '/sports' },
    { name: 'Casino', href: '/casino' },
    { name: 'Inplay', href: '/inplay' },
];

const Navbar = () => {
    const [isLoggedIn, setLoggedIn] = useState(true);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    return (
        <div className='flex z-50 justify-between bg-primary text-white fixed w-full p-1'>
            <div className='flex'>
                <CarouselBar />
                <div className=''>
                    <Link to='/'>
                        <img src={logo} className='h-12 w-12 -mt-1.5' alt='Logo' />
                    </Link>
                </div>

                {isLoggedIn ? (
                    <div className='hidden md:block'>
                        <SearchBar />
                    </div>
                ) : (
                    <div className='pt-1.5 font-bold text-lg'>BETZHUB</div>
                )}
            </div>

            <div className='p-1.5 md:block hidden' onClick={() => setDropdownOpen(false)}>
                <ul className='flex space-x-6 text-sm font-medium'>
                    {navList?.map((item, index) => (
                        <Link key={index}
                            to={item?.href}
                            className={`${location.pathname === item?.href && 'bg-gray-50 text-gray-800'
                                } hover:bg-gray-50 hover:text-gray-800 transition duration-300 px-3 py-1 rounded`}
                        >
                            {item?.name}
                        </Link>
                    ))}
                </ul>
            </div>

            <div className='flex space-x-1 md:space-x-3 p-1.5 text-xs' style={{ fontSize: '12px' }}>
                {isLoggedIn ? (
                    <>
                        <button className='bg-red-400 px-2 m-0.5 font-bold rounded'>
                            <div className='flex gap-1'>
                                <img src={WalletIcon} alt='Wallet' className='w-4' />
                                <p className='text-xs'>0.00</p>
                                <img src={arrowIcon} alt='Wallet' className='w-4 ml-1' />
                            </div>
                        </button>
                        <button className='bg-red-400 px-2 m-0.5 font-bold rounded'>
                            <div className='flex gap-1'>
                                <img src={addBoxIcon} alt='Wallet' className='w-4' />
                                <p className='text-xs'>Deposit</p>
                            </div>
                        </button>
                        <img src={settingIcon} alt='Settings' className='w-6' />
                        <div className='relative'>
                            <img
                                src={userIcon}
                                alt='User'
                                className='w-5 border-2 m-1.5 rounded-sm cursor-pointer'
                                onClick={() => setDropdownOpen(!isDropdownOpen)}
                            />
                            {isDropdownOpen && (
                                <ul className='absolute right-0 z-10 mt-3 py-3 items-end list-none overflow-hidden rounded-md border-none backdrop-blur-2xl bg-white/30 bg-clip-padding text-left text-base shadow-lg'>

                                    {UserOptions?.map((item, index) =>
                                        <li key={index}>
                                            <Link to={item?.href} onClick={() => setDropdownOpen(!isDropdownOpen)}
                                                className='block w-full whitespace-nowrap px-4 py-1 hover:bg-primary text-white text-xs rounded-sm font-semibold' >
                                                <div className='flex'>

                                                    <img src={item?.icon} alt='Settings' className='w-3 mt-0.5 absolute left-3 ' />
                                                    <div className='pl-4'>{item?.name}</div>
                                                </div>
                                            </Link>
                                        </li>
                                    )}

                                    <li>
                                        <Link to='/'
                                            className='block w-full whitespace-nowrap px-4 py-1 hover:bg-primary text-white text-xs rounded-sm font-semibold' >
                                            <div className='flex'>

                                                <img src={logoutIcon} alt='Settings' className='w-3 mt-0.5 absolute left-3 ' />
                                                <div className='pl-4'>Sign Out</div>
                                            </div>
                                        </Link>
                                    </li>

                                </ul>
                            )}
                        </div>

                    </>
                ) : (
                    <>
                        <LoginButton />
                        <RegisterButton />
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
