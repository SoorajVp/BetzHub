import { MenuLists } from '../../constants/MenuLists';
import InplayIcon from '../../assets/rfidline.svg'

const MenuRow = () => {
    return (
        <div className='flex overflow-x-scroll gap-2 p-1'>
            <div className='shadow-md gap-1 mt-2 border-2 border-white hover:border-primary transition duration-300 ease-in-out flex flex-col items-center bg-white rounded-md px-6 py-2'>
                <img src={InplayIcon} alt="Icon" className='w-6' />
                <p className='flex-1 whitespace-nowrap text-2xs font-semibold text-gray-700'>InPlay</p>
            </div>
            <p className='relative bg-black text-white text-2xs h-fit px-1.5 -ml-7 mt-1 rounded-sm'> 10</p>

            {MenuLists?.map((item, index) => (
                <>
                    <div key={index} className='shadow-md gap-1 mt-2 border-2 border-white hover:border-primary transition duration-300 ease-in-out flex flex-col items-center bg-white rounded-md px-6 py-2'>
                        <img src={item?.icon} alt="Icon" className='w-6' />
                        <p className='flex-1 whitespace-nowrap text-2xs font-semibold text-gray-700'>{item?.name}</p>
                    </div>
                    <p className='relative bg-black text-white text-2xs h-fit px-1.5 -ml-7 mt-1 rounded-sm'> 10</p>
                </>
            ))}
        </div>
    );
};

export default MenuRow;
