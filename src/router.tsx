import { CityBoundary } from "./pages/city/ArchiveFallback";
import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Analytics from "./Analytics";
const Registration = lazy(() => import("./pages/registration/Registration"));
// import Instructions from "./pages/registration/components/Instructions";
// import Instructions from "./pages/registration/components/detailsForm/DetailsForm"
const City = lazy(() => import("./pages/city/City"));
const Events = lazy(() => import("./pages/events/Events"));
const Sponsors = lazy(() => import("./pages/sponsors/Sponsors"));
const MediaPartners = lazy(() => import("./pages/mediaPartners/MediaPartners"));
// import ContactUs from "./pages/contactUs/ContactUs"; 
// import Preloader from "./pages/preloader/Preloader";
// import Ham from "./pages/ham/Ham";
const GettingToPilani = lazy(() => import("./pages/GettingToPilani/GettingToPilani"));
const Brochure = lazy(() => import("./pages/brochure/Brochure"));
const ComingSoon = lazy(() => import("./pages/comingSoon/ComingSoon"));
const Speakers = lazy(() => import("./pages/speakers/Speakers"));

const RedirectToHome = () => {
  return <Navigate to="/" replace />;
};

type page = {
  url: string;

  component: React.ComponentType<any>;
};

const pages: page[] = [
  {
    url: "/",

    component: City,
  },

  {
    url: "/registration",

    component: Registration,
  },
  {
    url: "/events",

    component: Events,
  },
  {
    url: "/sponsors",

    component: Sponsors,
  },
    {
    url: "/mediaPartners",

    component: MediaPartners,
  },
  // {
  //   url: '/city',
  //   component: City,
  // },
  // {
  //   url: "/contact",

  //   component: ContactUs,
  // },
  // {
  //   url: "/loader",Coming Soon

  //   component: Preloader,
  // },
  // {
  //   url: "/ham",

  //   component: Ham,
  // },
  {
    url: "/getting-to-pilani",
    component: GettingToPilani,
  },
  {
    url: "/brochure",
    component: Brochure,
  },
  {
    url: "/developers",
    component: ComingSoon,
  },
  {
    url: "/speakers",
    component: Speakers, //! @rm -rf ~/, here :)
  },
  {
  url: "/index.html",
  component: RedirectToHome,
}
];

const generateRoutes = (pages: page[]) => {
  return pages.map((page) => {
    return {
      path: page.url,

      element: <Suspense fallback={<p style={{padding:32,color:"#fff100"}}>Loading archive…</p>}><CityBoundary><page.component /></CityBoundary></Suspense>,
    };
  });
};

// const router = createBrowserRouter([...generateRoutes(pages)]);
const router = createBrowserRouter([
  {
    element: <Analytics />, // 👈 GA wrapper
    children: [
      ...generateRoutes(pages),
      {
        path: "*",
        element: <div style={{padding:40,color:"#fff100"}}><h1>Page not found</h1><p>This archive page is unavailable.</p><a href="/">Explore APOGEE 2026</a></div>,
      },
    ],
  },
]);

export default router;
