import { useState } from 'react'
import addIcon from '../../../assets/add.svg'
import arrowIcon from '../../../assets/iconamoonarrowup2.svg'

const ListItem = ({ item }) => {
    const [subList, setSubList] = useState(false)

    const listItems = () => {
        setSubList(!subList)
    }
    return (
        <li className='font-semibold text-gray-800 text-2xs'>
            <div onClick={listItems} className="flex items-center p-2 gap-2 rounded hover:text-white cursor-pointer transition duration-150 hover:bg-red-400 group">
                <img src={item?.icon} alt="Allsports" className='w-4' />
                <span className="flex-1 whitespace-nowrap">{item?.name}</span>
                {item?.sub.length > 0 && <img src={subList ? arrowIcon : addIcon} alt="Events" className='w-4 ' />}
            </div>
            {
                subList &&
                item?.sub?.map((value) =>
                    <div className='hover:bg-red-400 hover:text-white transition duration-150  cursor-pointer mx-6 my-0.5 py-0.5 rounded'>
                        <div className='pl-2 border-l-2 border-black'> {value}</div>
                    </div>
                )
            }
        </li>
    )
}

export default ListItem