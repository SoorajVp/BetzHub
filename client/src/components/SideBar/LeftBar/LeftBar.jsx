import { MenuList } from '../../../constants/menuList.js'
import allSportsIcon from '../../../assets/allsports.png'
import eventsIcon from '../../../assets/fluentmdl2event12.svg'
import ListItem from './ListItem.jsx'

const LeftBar = () => {

    return (
        <div className='col-span-1 hidden lg:block'>
            <div className="h-screen w-[16%] fixed z-10 border-2 m-2  rounded-lg overflow-y-auto bg-gray-50">
                <ul className="pl-1 pt-2 overflow-y-scroll pb-6">

                    <li className='text-xs font-semibold text-red-800'>
                        <div className="flex items-center p-2 gap-2  rounded-lg hover:bg-gray-100 group">
                            <img src={allSportsIcon} alt="Allsports" className='w-6' />
                            <span className="flex-1 whitespace-nowrap">All Sports</span>
                            <img src={eventsIcon} alt="Events" className='w-4' />
                        </div>
                    </li>

                    {MenuList?.map((item, index) =>
                        <ListItem item={item} key={index} />
                    )}

                </ul>
            </div>
        </div>
    )
}

export default LeftBar