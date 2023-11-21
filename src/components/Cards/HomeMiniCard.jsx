import ratingIcon from '../../assets/notostar.svg'
import { ReviewList } from '../../constants/reviewList'

const HomeMiniCards = () => {

    return (
        <div>
            <div className='flex justify-center w-full text-white font-bold text-xl uppercase mb-4'>Reviews</div>
            <div className='bg-gray-800'>
                <div className='flex gap-6 p-10 overflow-x-auto'>

                    {ReviewList?.map((item, i) => (

                        <div key={i} className='flex flex-col gap-1 bg-gray-200 p-5 rounded-lg' style={{ minWidth: '250px', maxWidth: '250px' }}>
                            <h3 className='text-xs'>{item?.text}</h3>
                            <h2 className='text-xs font-bold pt-2'>{item?.name}</h2>
                            <div className="flex gap-2">
                                {Array.from({ length: item.rating }, (_, index) => (
                                    <img src={ratingIcon} alt="rating" className='w-5' />
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default HomeMiniCards