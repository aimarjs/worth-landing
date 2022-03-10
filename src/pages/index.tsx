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
          urlTo="http://worth.systems"
          countryLabel="The Netherlands"
          countryId="nl"
          buttonText="Bezoek NL Website "
        />
        <Section
          className="england"
          active={active}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          urlTo="http://worth.digital"
          countryLabel="England"
          countryId="eng"
          buttonText="Visit UK Website"
        />
      </div>
    </>
  );
}
