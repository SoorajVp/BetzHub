import { Link } from 'react-router-dom'
import bannerImg from '../../assets/premium-photo---3d-rendering-online-gambling-1@2x.png'
import React from 'react'

const HomeMainBanner = () => {
  return (
    <div>

      <div className='grid md:grid-cols-2 bg-black py-5'>
        <div className='flex flex-col justify-center items-center py-10 md:p-0'>
          <h1 className='uppercase font-black text-white text-4xl'> Play big <br /> win bigger </h1>
          <div className='text-white my-6 space-x-5 text-sm'>
            <Link to='/sports'><button className='bg-primary hover:bg-white hover:text-primary transition duration-500 px-9 md:px-12 py-1.5 rounded-md'>Sports</button></Link>
            <Link to='/casino'><button className='bg-primary hover:bg-white hover:text-primary transition duration-500 px-9 md:px-12 py-1.5 rounded-md'>Casino</button></Link>
          </div>
        </div>

        <div>
          <img src={bannerImg} alt="Banner" className='w-[100%]' />
        </div>
      </div>

    </div>
  )
}

export default HomeMainBanner