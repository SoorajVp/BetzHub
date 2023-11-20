import HomeBanner from '../components/Banner/HomeBanner';
import HomeMiniBanner from '../components/Banner/HomeMiniBanner';
import ButtonsRaw from '../components/Buttons/ButtonsRaw';
import HomeMainCards from '../components/Cards/HomeMainCard';
import HomeMiniCards from '../components/Cards/HomeMiniCard';

const Home = () => {
  return (
    <>
      <HomeBanner />
      <ButtonsRaw />
      <HomeMainCards />
      <HomeMiniBanner />
      <HomeMiniCards />
    </>
  )
}

export default Home;