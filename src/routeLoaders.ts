export const loadCity = () => import("./pages/city/City");
export const loadEvents = () => import("./pages/events/Events");
export const loadSpeakers = () => import("./pages/speakers/Speakers");
export const loadSponsors = () => import("./pages/sponsors/Sponsors");
export const loadMedia = () => import("./pages/mediaPartners/MediaPartners");
export const loadDirections = () => import("./pages/GettingToPilani/GettingToPilani");
export const loadBrochure = () => import("./pages/brochure/Brochure");
export const loadAbout = () => import("./pages/aboutUs/AboutPage");
export const loadContact = () => import("./pages/contactUs/ContactPage");

const loaders: Record<string, () => Promise<unknown>> = { "/": loadCity, "/events": loadEvents, "/speakers": loadSpeakers, "/sponsors": loadSponsors, "/mediaPartners": loadMedia, "/media-partners": loadMedia, "/getting-to-pilani": loadDirections, "/brochure": loadBrochure, "/about": loadAbout, "/contact": loadContact };
export function prefetchRoute(path: string) {
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  if (!connection?.saveData) loaders[path]?.().catch(() => {});
}
