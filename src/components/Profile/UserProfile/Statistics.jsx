import statIcon from '../../../assets/group-191.svg'

const Statistics = () => {
    return (
        <div className='col-span-1 md:col-span-2 w-full p-4 bg-gray-200 rounded-md'>
            <div className='flex gap-2'>
                <img src={statIcon} alt="Statistics" className='w-4' />
                <h2 className='text-sm text-gray-700 font-semibold'>Statistics</h2>
            </div>
            <div className='flex justify-between gap-2 py-3'>
                <div className='text-center w-full bg-white pt-2 rounded-lg'>
                    <h3 className='text-sm text-gray-600'>Today Profit</h3>
                    <h1 className='py-3 text-3xl text-red-800'>0</h1>
                </div>
                <div className='text-center w-full bg-white pt-2 rounded-lg'>
                    <h3 className='text-sm text-gray-600'>Today profit in sport</h3>
                    <h1 className='py-3 text-3xl text-red-800'>0</h1>
                </div>
                <div className='text-center w-full bg-white pt-2 rounded-lg'>
                    <h3 className='text-sm text-gray-600'>Today profit in casino</h3>
                    <h1 className='py-3 text-3xl text-red-800'>0</h1>
                </div>
            </div>
        </div>
    )
}

export default Statistics