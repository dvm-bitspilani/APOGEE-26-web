import { lazy, Suspense, type ComponentType } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { CityBoundary } from "./pages/city/CityBoundary";
import LandingArtwork from "./pages/city/LandingArtwork";
import Analytics from "./Analytics";
import { loadCity, loadEvents, loadSponsors, loadMedia, loadDirections, loadBrochure, loadSpeakers, loadAbout, loadContact } from "./routeLoaders";

const Registration = lazy(() => import("./pages/registration/Registration"));
const City = lazy(loadCity);
const Events = lazy(loadEvents);
const Sponsors = lazy(loadSponsors);
const MediaPartners = lazy(loadMedia);
const GettingToPilani = lazy(loadDirections);
const Brochure = lazy(loadBrochure);
const Speakers = lazy(loadSpeakers);
const About = lazy(loadAbout);
const Contact = lazy(loadContact);
const ComingSoon = lazy(() => import("./pages/comingSoon/ComingSoon"));

const pages: Array<{ path: string; component: ComponentType }> = [
  { path: "/", component: City },
  { path: "/registration", component: Registration },
  { path: "/events", component: Events },
  { path: "/sponsors", component: Sponsors },
  { path: "/mediaPartners", component: MediaPartners },
  { path: "/getting-to-pilani", component: GettingToPilani },
  { path: "/brochure", component: Brochure },
  { path: "/developers", component: ComingSoon },
  { path: "/speakers", component: Speakers },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

export default createBrowserRouter([{
  element: <Analytics />,
  children: [
    ...pages.map(({ path, component: Page }) => ({ path, element: <CityBoundary key={path}><Suspense fallback={<LandingArtwork />}><Page /></Suspense></CityBoundary> })),
    { path: "/media-partners", element: <Navigate to="/mediaPartners" replace /> },
    { path: "/index.html", element: <Navigate to="/" replace /> },
    { path: "*", element: <Suspense fallback={<LandingArtwork />}><ComingSoon /></Suspense> },
  ],
}]);
