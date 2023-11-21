import React from 'react'
import MainBanner from '../components/SportsElements/MainBanner';
import ContentList from '../components/SportsElements/ContentList';

const Sports = () => {
  return (
    <div className='col-span-12 lg:col-span-7'>
      <MainBanner />
      <ContentList />
    </div>
  )
}

export default Sports;