import vsIcon from '../../assets/tablervs.svg'
import { StreamData } from '../../constants/streamList'

const StreamTable = () => {
  return (
    <>
    {
        StreamData?.map((item) =>
            <div className='grid grid-cols-1 my-1.5 lg:grid-cols-3 bg-white rounded-md'>

                <div className='col-span-2 flex justify-between font-semibold  text-2xs m-2'>
                    <div className='flex'>

                        <div className='flex flex-col w-20 h-12 bg-gray-900 text-white rounded-md justify-center text-center'>
                            <h2>{item?.date}</h2>
                            <h2>{item?.time}</h2>
                        </div>

                        <div className='flex flex-col ml-2 p-0.5'>
                            <div className='flex'>
                                <h2>{item?.team1} </h2>
                                <img src={vsIcon} alt="VS icon" className='w-4 ml-1 -mt-0.5' />
                            </div>
                            <h2>{item?.team2}</h2>
                            <h2 className='text-gray-500'>{item?.tournament}</h2>
                        </div>
                    </div>

                    <div className='flex items-center ml-2 p-0.5'>
                        <h2 className='px-1 rounded border-2 border-black text-sm'>M</h2>
                    </div>

                </div>

                <div className='flex p-1 h-12  gap-1.5 lg:my-2.5 text-gray-500'>
                    <div className='flex w-full'>
                        <div className='flex justify-center items-center bg-blue-200 rounded-l-xl w-[50%]'>-</div>
                        <div className='flex justify-center items-center bg-red-200 rounded-r-xl w-[50%]'>-</div>
                    </div>

                    <div className='flex w-full'>
                        <div className='flex justify-center items-center bg-blue-200 rounded-l-xl w-[50%]'>-</div>
                        <div className='flex justify-center items-center bg-red-200 rounded-r-xl w-[50%]'>-</div>
                    </div>

                    <div className='flex w-full'>
                        <div className='flex justify-center items-center bg-blue-200 rounded-l-xl w-[50%]'> - </div>
                        <div className='flex justify-center items-center bg-red-200 rounded-r-xl w-[50%]'>-</div>
                    </div>
                </div>

            </div>
        )
    }
    </>
  )
}

export default StreamTable