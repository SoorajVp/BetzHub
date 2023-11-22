import { UserOptions } from '../../constants/userOptions'
import userIcon from '../../assets/vector6.svg'
import { Link } from 'react-router-dom'

const TopRow = () => {
    return (
        <div className='flex overscroll-auto overflow-x-scroll gap-2 p-2'>

            {
                UserOptions?.map((item) =>
                    <button className='flex  py-4 bg-red-400 px-8 rounded-md' >
                            <img src={item?.icon} alt="Profile" className='w-4 -ml-2 mt-0.5' />
                            <h3 className='text-sm px-2 font-medium whitespace-nowrap'>{item?.name}</h3>
                    </button>
                )
            }

        </div>
    )
}

export default TopRow