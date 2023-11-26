import gamingHead from '../../assets/capture.png'

const MiniFooter = () => {
    return (
        <div className='md:grid md:grid-cols-3 md:gap-4 my-8 flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center'>
                <img src={gamingHead} alt="Head" className='h-14' />
            </div>
            <div className='flex justify-center  text-center'>
                <h3 className='text-xs text-white px-6'>Visit run567.co for tools and resources to help you stay in control of the way you play.
                </h3>
            </div>
            <div className='lg:pl-28'>
                <button className='bg-primary text-white text-sm font-semibold hover:bg-red-500 px-7 py-1.5 rounded-md'>Learn more</button>
            </div>
        </div>
    )
}

export default MiniFooter