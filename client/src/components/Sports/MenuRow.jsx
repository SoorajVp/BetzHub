import { useContext, useEffect, useState } from 'react';
import InplayIcon from '../../assets/rfidline.svg'
import { MenuList } from '../../constants/menuList.js';
import { ActionContext } from '../../contexts/ActionContext.jsx';

const MenuRow = () => {
    const { subMenu, setSubMenu } = useContext(ActionContext)
    const [totalMatche, setTotalMatch] = useState(0)
    useEffect(() => {
        const totalSubArrayLength = MenuList.reduce((total, item) => total + item.sub.length, 0);
        setTotalMatch(totalSubArrayLength)
    }, [])

    return (
        <div className='flex overflow-x-scroll gap-2 py-3'>

            <div className='flex' onClick={() => setSubMenu('')} >
                <div className={`${!subMenu ? 'border-gray-700' : 'border-gray-100' } border-2 shadow-lg gap-1 mt-2 transition duration-300 ease-in-out flex flex-col items-center bg-white rounded-md px-6 py-2`}>
                    <img src={InplayIcon} alt="Icon" className='w-6' />
                    <p className='flex-1 whitespace-nowrap text-2xs font-semibold text-gray-700'>InPlay</p>
                </div>
                <p className='bg-black text-white text-2xs h-fit px-1.5 -ml-5 mt-1 rounded-sm'> {totalMatche}</p>
            </div>

            {MenuList?.map((item, index) => (
                <div className='flex cursor-pointer' onClick={() => setSubMenu(item?.name)} key={index}>
                    <div className={`${subMenu == item?.name ? 'border-gray-700' : 'border-gray-100'} border-2 shadow-lg gap-1 mt-2 transition duration-300 ease-in-out flex flex-col items-center bg-white rounded-md px-6 py-2`}>
                        <img src={item?.icon} alt="Icon" className='w-6' />
                        <p className='flex-1 whitespace-nowrap text-2xs font-semibold text-gray-700'>{item?.name}</p>
                    </div>
                    <p className={`${item?.sub?.length === 0 ? 'bg-gray-600' : 'bg-black' }  text-white text-2xs h-fit px-1.5 -ml-5 mt-1 rounded-sm`}>{item?.sub?.length}</p>
                </div>
            ))}

        </div>
    );
};

export default MenuRow;
