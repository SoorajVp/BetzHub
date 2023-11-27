import { UserOptions } from '../../constants/userOptions'
import { Link, useLocation } from 'react-router-dom'

const TopRow = () => {
    const location = useLocation();
    return (
        <div className='flex overscroll-auto overflow-x-scroll gap-2 p-2'>

            {
                UserOptions?.map((item, index) =>
                    <Link to={item?.href} key={index}>
                        <button className={`border-2 ${location.pathname == item?.href ? 'border-primary' : 'border-white' } flex py-3 shadow-md bg-white px-8 rounded-md`} >
                            <img src={item?.icon} alt="Profile" className='w-4 -ml-2 mt-0.5' />
                            <h3 className='text-sm text-gray-800 px-2 font-semibold whitespace-nowrap'>{item?.name}</h3>
                        </button>
                    </Link>
                )
            }

        </div>
    )
}

export default TopRow