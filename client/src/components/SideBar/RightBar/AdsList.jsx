import { VideoList } from '../../../constants/videoList';

const AdsList = () => {
    return (
        <div className='w-full mt-2 bg-gray-100 rounded-xl'>
            <div className='flex bg-red-300 text-gray-800 rounded-t-xl p-2 text-xs font-semibold'>
                <h2 className='flex justify-center border-r-2 border-gray-800 w-full'>Provider</h2>
                <h2 className='flex justify-center border-r-2 border-gray-800 w-full'>Live</h2>
                <h2 className='flex justify-center w-full'>Virtual</h2>
            </div>
            <div className='flex flex-wrap p-1'>
                {VideoList?.map((item, index) => (
                    <div key={index} className='w-1/2 p-0.5'>
                        <img src={item} alt={`Promo ${index}`} className='w-full h-auto rounded-2xl' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdsList;
