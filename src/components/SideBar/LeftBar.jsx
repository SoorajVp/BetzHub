import allSportsIcon from '../../assets/allsports.png'
import eventsIcon from '../../assets/fluentmdl2event12.svg'
import addIcon from '../../assets/add.svg'
import { MenuList } from '../../constants/menuList.js'

const LeftBar = () => {

    return (
        <div className='col-span-1 hidden lg:block'>
            <div className="h-screen w-[16%] fixed z-10 border-2 m-2  rounded-lg overflow-y-auto bg-gray-50">
                <ul className=" pt-2">

                    <li className='text-xs font-semibold text-red-800'>
                        <div className="flex items-center p-2 gap-2  rounded-lg hover:bg-gray-100 group">
                            <img src={allSportsIcon} alt="Allsports" className='w-6' />
                            <span className="flex-1 whitespace-nowrap">All Sports</span>
                            <img src={eventsIcon} alt="Events" className='w-4' />
                        </div>
                    </li>

                    {MenuList?.map((item) =>
                        <li className='font-semibold text-gray-800 text-2xs' key={item?.name}>
                            <div className="flex items-center p-2 gap-2 rounded hover:text-white transition duration-150 hover:bg-red-400 group">
                                <img src={item?.icon} alt="Allsports" className='w-4' />
                                <span className="flex-1 whitespace-nowrap">{item?.name}</span>
                                <img src={addIcon} alt="Events" className='w-4 ' />
                            </div>
                            {/* <div className='space-y-1'>
                                <div className='ml-8 pl-1 border-l-2 border-black'> sdfdsjfd</div>
                                <div className='ml-8 pl-1 border-l-2 border-black'> sdfdsjfd</div>
                            </div> */}

                        </li>
                    )}

                </ul>
            </div>
        </div>
    )
}

export default LeftBar