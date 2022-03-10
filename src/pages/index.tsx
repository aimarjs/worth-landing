import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCookieConsentValue } from 'react-cookie-consent';
import Section from '../components/Section';
import { CookieConsentBanner } from '../components/CookieConsentBanner';
import { handleAcceptCookie, event, pageview } from '../lib/ga';

export default function Home() {
  const router = useRouter();
  const [active, setActive] = useState('');
  const isConsent = getCookieConsentValue();

  const handleMouseEnter = (id: string) => {
    setActive(id);
  };

  const handleMouseLeave = () => {
    setActive('');
  };

  const handleCTAClick = (location: string) => {
    if (location === 'nl') {
      event({
        action: 'CTA_Click',
        category: 'CTA',
        label: location,
        value: 1,
      });
      router.push('https://worth.systems');
    }

    if (location === 'eng') {
      event({
        action: 'CTA_Click',
        category: 'CTA',
        label: location,
        value: 2,
      });
      router.push('https://worth.digital');
    }
  };

  useEffect(() => {
    pageview(router.pathname);
    if (isConsent === 'true') {
      handleAcceptCookie();
    }
  }, [isConsent]);

  return (
    <>
      <div className="container">
        <Section
          className="netherlands"
          active={active}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          handleCTAClick={() => handleCTAClick('nl')}
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
          handleCTAClick={() => handleCTAClick('eng')}
          urlTo="http://worth.digital"
          countryLabel="England"
          countryId="eng"
          buttonText="Visit UK Website"
        />
      </div>
      <CookieConsentBanner />
    </>
  );
}
