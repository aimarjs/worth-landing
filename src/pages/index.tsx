import { useState } from 'react';
import Section from '../components/Section';

export default function Home() {
  const [active, setActive] = useState('');
  const handleMouseEnter = (id: string) => {
    setActive(id);
  };

  const handleMouseLeave = () => {
    setActive('');
  };
  return (
    <>
      <div className="container">
        <Section
          className="netherlands"
          active={active}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          image="https://static.wixstatic.com/media/7acf0b_4c9560a517ba4ef285ce8827cafff07e~mv2.png/v1/fill/w_134,h_50,al_c,usm_0.66_1.00_0.01,enc_auto/7acf0b_4c9560a517ba4ef285ce8827cafff07e~mv2.png"
          urlTo="http://worth.systems"
          countryLabel="The Netherlands"
          countryId="nl"
          buttonText="Bezoek"
        />
        <Section
          className="england"
          active={active}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          image="https://static.wixstatic.com/media/7acf0b_4c9560a517ba4ef285ce8827cafff07e~mv2.png/v1/fill/w_134,h_50,al_c,usm_0.66_1.00_0.01,enc_auto/7acf0b_4c9560a517ba4ef285ce8827cafff07e~mv2.png"
          urlTo="http://worth.digital"
          countryLabel="England"
          countryId="eng"
          buttonText="Visit"
        />
      </div>
    </>
  );
}
