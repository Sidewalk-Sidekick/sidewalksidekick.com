import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Why from '../components/Why';
import OurStory from '../components/OurStory';
import MeetTheTeam from '../components/MeetTheTeam';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';
import GetInvolved from '../components/GetInvolved';
import MapPreview from '../components/MapPreview';

const Home = () => {
  return (
    <div className='page-container'>
      <Hero />
      <MapPreview />
      <HowItWorks />
      <Why />
      <OurStory />
      <MeetTheTeam />
      <Sponsors />
      <GetInvolved />
      <Footer />
    </div>
  );
};

export default Home;