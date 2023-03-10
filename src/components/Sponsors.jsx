import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionHeading from './SectionHeading';
import SectionContent from './SectionContent';
import '../ui/Sponsors.css';
import Cards from './Cards';
import Card from './Card';
import CardContent from './CardContent';
import CardMedia from './CardMedia';

const Sponsors = () => {
  return (
    <Section className='sponsors'>
      <SectionHeader>
        <SectionHeading title='Sponsors' />
      </SectionHeader>
      <SectionContent className='container'>
        <Cards className='grid grid-4-cols'>
          <Card>
            <CardContent>
              <CardMedia>
                <img src='give-back-hack-logo.png' alt='logo' />
              </CardMedia>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardMedia>
                <img src='code-and-coffee-logo.jpeg' alt='logo' />
              </CardMedia>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardMedia>
                <img src='united-way-logo.png' alt='logo' />
              </CardMedia>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardMedia>
                <img
                  src='https://dummyimage.com/600x600/cccccc/ffffff.png&text=Venue+Sponsor'
                  alt='logo'
                />
              </CardMedia>
            </CardContent>
          </Card>
        </Cards>
        <a href='http://localhost:3000/' className='btn btn-dark'>
          Become a Sponsor
        </a>
      </SectionContent>
    </Section>
  );
};

export default Sponsors;
