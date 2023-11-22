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
                        <a href="#" className="flex items-center p-2 gap-2  rounded-lg hover:bg-gray-100 group">
                            <img src={allSportsIcon} alt="Allsports" className='w-6' />
                            <span className="flex-1 whitespace-nowrap">All Sports</span>
                            <img src={eventsIcon} alt="Events" className='w-4' />
                        </a>
                    </li>

                    {/* <li>
                        <button class="group relative h-7 w-48 overflow-hidden rounded-lg bg-white text-sm">
                            <div class="absolute inset-0 w-0 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span class="relative text-black group-hover:text-white">
                                <a href="#" className="flex items-center p-2 gap-2  rounded-lg group">
                                    <img src={allSportsIcon} alt="Allsports" className='w-6' />
                                    <h3 className="flex-1 whitespace-nowrap items-start">All Sports</h3>
                                    <img src={eventsIcon} alt="Events" className='w-4' />
                                </a>
                            </span>
                        </button>
                    </li> */}

                    {MenuList?.map((item) =>
                        <li className='font-semibold text-gray-800 text-2xs' key={item?.name}>
                            <a href="#" className="flex items-center p-2 gap-2  rounded-sm hover:bg-red-100 group">
                                <img src={item?.icon} alt="Allsports" className='w-4' />
                                <span className="flex-1 whitespace-nowrap">{item?.name}</span>
                                <img src={addIcon} alt="Events" className='w-4 ' />
                            </a>
                        </li>
                    )}

                </ul>
            </div>
        </div>
    )
}

export default LeftBar