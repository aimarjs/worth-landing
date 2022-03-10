import * as ReactGA from "react-ga";
import { Cookies } from "react-cookie-consent";

export const GA_TRACKING_ID = 'G-WD900KCMGP';

declare global {
  interface Window {
    gtag: any
  }
}

export const handleAcceptCookie = () => {
  if (GA_TRACKING_ID) {
    ReactGA.initialize(GA_TRACKING_ID);
  }
}

export const handleDeclineCookie = () => {
  Cookies.remove("_ga");
  Cookies.remove("_gat");
  Cookies.remove("_gid");
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value
  });
};