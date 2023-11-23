import { UserOptions } from '../../constants/userOptions'
import { Link, useLocation } from 'react-router-dom'

const TopRow = () => {
    const location = useLocation();
    return (
        <div className='flex overscroll-auto overflow-x-scroll gap-2 p-2'>

            {
                UserOptions?.map((item) =>
                    <Link to={item?.href}>
                        <button className={`border-2 ${location.pathname == item?.href ? 'border-black' : 'border-white' } flex py-3 bg-red-400 px-8 rounded-md`} >
                            <img src={item?.icon} alt="Profile" className='w-4 -ml-2 mt-0.5' />
                            <h3 className='text-sm text-white px-2 font-semibold whitespace-nowrap'>{item?.name}</h3>
                        </button>
                    </Link>
                )
            }

        </div>
    )
}

export default TopRow