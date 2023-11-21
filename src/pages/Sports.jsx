import React from 'react'
import MainBanner from '../components/SportsElements/MainBanner';
import ContentList from '../components/SportsElements/ContentList';
import Footer from '../components/Footer/Footer';

const Sports = () => {
  return (
    <div className='col-span-6 overflow-auto max-h-screen lg:col-span-4'>
      <MainBanner />
      <ContentList />
      <Footer />

    </div>
  )
}

export default Sports;