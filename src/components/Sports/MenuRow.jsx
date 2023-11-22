import InplayIcon from '../../assets/rfidline.svg'
import { MenuList } from '../../constants/menuList.js';

const MenuRow = () => {
    return (
        <div className='flex overflow-x-scroll gap-2 py-3'>

            <div className='flex'>
                <div className='shadow-lg gap-1 mt-2 border-2 border-gray-700 transition duration-300 ease-in-out flex flex-col items-center bg-white rounded-md px-6 py-2'>
                    <img src={InplayIcon} alt="Icon" className='w-6' />
                    <p className='flex-1 whitespace-nowrap text-2xs font-semibold text-gray-700'>InPlay</p>
                </div>
                <p className='bg-black text-white text-2xs h-fit px-1.5 -ml-5 mt-1 rounded-sm'> 10</p>
            </div>

            {MenuList?.map((item, index) => (
                <div className='flex' key={index}>
                    <div className='shadow-lg gap-1 mt-2 border-2 border-gray-100 hover:border-gray-700 transition duration-300 ease-in-out flex flex-col items-center bg-white rounded-md px-6 py-2'>
                        <img src={item?.icon} alt="Icon" className='w-6' />
                        <p className='flex-1 whitespace-nowrap text-2xs font-semibold text-gray-700'>{item?.name}</p>
                    </div>
                    <p className='bg-black text-white text-2xs h-fit px-1.5 -ml-5 mt-1 rounded-sm'> 10</p>
                </div>
            ))}

        </div>
    );
};

export default MenuRow;
