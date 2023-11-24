import { useContext, useLayoutEffect } from 'react';
import HomeMiniBanner from '../components/Banner/HomeMiniBanner';
import ButtonsRaw from '../components/Buttons/ButtonsRaw';
import HomeMainCards from '../components/Cards/HomeMainCard';
import HomeMiniCards from '../components/Cards/HomeMiniCard';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import HomeMainBanner from '../components/Banner/HomeMainBanner';

const Home = () => {

  const { isAuth } =useContext(AuthContext)
  
  const navigate = useNavigate()
  useLayoutEffect(() => {
    isAuth && navigate('/sports')
  })

  return (
    <>
      <HomeMainBanner />
      <ButtonsRaw />
      <HomeMainCards />
      <HomeMiniBanner />
      <HomeMiniCards />
    </>
  )
}

export default Home;