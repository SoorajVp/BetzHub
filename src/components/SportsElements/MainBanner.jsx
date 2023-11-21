import BannerImg from '../../assets/rectangle-12@2x.png'

const MainBanner = () => {
  return (
    <div className='w-full lg:p-2'>
        <img src={BannerImg} alt="SportsBanner" className='w-full' />
    </div>
  )
}

export default MainBanner