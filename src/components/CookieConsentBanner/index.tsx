import CookieConsent from 'react-cookie-consent';
import { handleAcceptCookie, handleDeclineCookie } from '../../lib/ga';

export function CookieConsentBanner() {
  return (
    <CookieConsent
      onAccept={handleAcceptCookie}
      onDecline={handleDeclineCookie}
      debug={false}
      enableDeclineButton
      declineButtonText="Decline"
      buttonText="Accept"
      style={{ background: 'black' }}
      buttonStyle={{ color: 'black', background: 'white', fontSize: '1em' }}
      flipButtons={true}
      declineButtonStyle={{
        color: 'white',
        background: 'black',
        border: '1px solid white',
      }}
    >
      <div className="consent-text">
        We use cookies to enable the proper functioning and security of our
        website, and to help us offer you the best possible user experience. By
        clicking accept, you consent to the use of these cookies for advertising
        and analytics. You can change your cookie settings at any time.
      </div>
    </CookieConsent>
  );
}
