import React from 'react'
import logo from '../../assets/5_1.png'
import SearchIcon from '../../assets/search2line.svg'


const Navbar = () => {

    const navList = [
        { name: "Sports", href: '/sports' },
        { name: "Casino", href: '/casino' },
        { name: "Inplay", href: '/inplay' }
    ]
    return (
        <div className='flex justify-between bg-primary text-white'>
            <div className='flex'>
                <div className=''>
                    <img src={logo} className='h-12' alt="Logo" />
                </div>

                <div className='pt-2.5 font-bold text-xl'>BETZHUB</div>

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

            <div className='p-2 md:block hidden'>
                <ul className='flex space-x-6 text-sm'>
                    {navList?.map((item) =>
                        <li className='hover:bg-gray-100 hover:text-gray-800 px-3 py-1.5 rounded-md' key={item.href}>{item?.name}</li>
                    )}
                </ul>
            </div>

            <div className='space-x-1 md:space-x-3 p-3 text-xs' style={{fontSize: '12px'}}>
                <button className='bg-red-400 px-2 md:px-3 py-1.5 rounded-md'>SIGN IN</button>
                <button className='bg-red-400 px-2 md:px-3 py-1.5 rounded-md'>REGISTER</button>
            </div>

        </div>
    )
}

export default Navbar