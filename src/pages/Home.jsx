import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Partnerships from '../components/Partnerships';
import TeamHistory from '../components/TeamHistory';

const Home = () => {
  return (
    <div className='page-container'>
      <Hero />
      <HowItWorks />
      <TeamHistory />
      <Partnerships />
    </div>
  );
};

export default Home;
