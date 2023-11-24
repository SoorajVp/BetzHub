import SearchIcon from '../../assets/search2line.svg';

const Table = ({ heads }) => {
    return (
        <div className='py-5'>
            <div className='flex justify-between w-full p-1 py-3'>
                <div className='flex gap-1'>
                    <div className='text-sm font-semibold text-gray-800 pt-0.5'>Show</div>
                    <div className="flex items-center justify-between py-1 px-2 bg-red-300 rounded">
                        <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg></a>
                    </div>
                    <div className='text-sm font-semibold text-gray-800 pt-0.5'>entries</div>

                </div>
                <div className=''>
                    <label className='text-sm font-medium text-gray-900 sr-only '>
                        Search
                    </label>
                    <div className='relative'>
                        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                            <img src={SearchIcon} alt='Search' className='w-4 h-4' />
                        </div>
                        <input
                            type='search'
                            id='default-search'
                            className='block w-full p-1 ps-10 text-xs text-gray-800 border rounded bg-red-300'
                            placeholder=''
                        />
                    </div>
                </div>

            </div>
            <div className='overflow-x-auto '>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 ">
                        <tr className=''>
                            {
                                heads?.map((item, index) =>
                                    <th scope="col" key={index}>
                                        <div className="flex items-center justify-between py-1.5 px-2 bg-red-300 rounded">
                                            {item}
                                            <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                            </svg></a>
                                        </div>
                                    </th>
                                )
                            }
                        </tr>

                    </thead>
                    <tbody className=''>
                    </tbody>

                </table>
            </div>
            <hr className="border-t-2 border-gray-600 mt-3 w-fit" />
            <div className='text-center text-sm text-gray-700 py-3'>No data available in table</div>
            <hr className="border-t-2 border-gray-600 " />

            <div className='flex justify-between text-2xs py-2'>
                <div>Showing 0 to 0 of 0 entries</div>
                <div>Previous &nbsp; Next</div>

            </div>
        </div>
    )
}

export default Table