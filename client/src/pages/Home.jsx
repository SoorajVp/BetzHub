import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import HomeMiniBanner from '../components/Banner/HomeMiniBanner';
import ButtonsRaw from '../components/Buttons/ButtonsRaw';
import HomeMainCards from '../components/Cards/HomeMainCard';
import HomeMiniCards from '../components/Cards/HomeMiniCard';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import HomeMainBanner from '../components/Banner/HomeMainBanner';

const Home = () => {

  // const { user } =useContext(AuthContext)
  const [user, setUser] = useState()
  
  const navigate = useNavigate()
  useEffect(() => {
    const userData = localStorage.getItem('betzhubUser');
    setUser(JSON.parse(userData))
    user && navigate('/sports')
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