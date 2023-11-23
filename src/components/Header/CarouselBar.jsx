import React, { useState } from 'react';
import menuIcon from '../../assets/icons8-menu.svg'
import addIcon from '../../assets/add2.svg'
import backIcon from '../../assets/icons8-back-48.png'
import SearchBar from './SearchBar';
import { MenuList } from '../../constants/menuList';


const CarouselBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='md:hidden'>
                <button
                    type="button"
                    className="text-gray-500 hover:text-gray-600"
                    onClick={toggleSidebar}
                >
                    <img src={menuIcon} alt="Menu" className='w-5 mt-2.5 text-white' />
                </button>

                {isOpen && (
                    <div
                        id="docs-sidebar"
                        className={`translate-x-0 transition-transform ease-in-out duration-500 transform fixed top-0 start-0 bottom-0 z-60 w-64 bg-red-500 border-e border-gray-200 pt-2 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 `}
                    >
                        <div className="flex gap-2 px-2 text-xs">
                            <img src={backIcon} alt="Bakc icon" className='w-6 h-8 mt-1' onClick={toggleSidebar} />
                            <SearchBar />
                        </div>
                        <nav
                            className="hs-accordion-group px-2 w-full flex flex-col flex-wrap"
                            data-hs-accordion-always-open
                        >

                            <ul className="pt-2">

                                {MenuList?.map((item) =>
                                    <li className='font-semibold text-white text-2xs' key={item?.name}>
                                        <a href="#" className="flex items-center p-2 gap-2  rounded-md hover:bg-primary group">
                                            <img src={item?.icon} alt="Allsports" className='w-4' />
                                            <span className="flex-1 whitespace-nowrap">{item?.name}</span>
                                            <img src={addIcon} alt="Events" className='w-4 ' />
                                        </a>
                                    </li>
                                )}

                            </ul>
                        </nav>
                    </div>
                )}
            </div>

        </>
    );
};

export default CarouselBar;
