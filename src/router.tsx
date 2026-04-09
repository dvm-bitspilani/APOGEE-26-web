import { createBrowserRouter, Navigate } from "react-router-dom";
import Analytics from "./Analytics";
import Registration from "./pages/registration/Registration";
// import Instructions from "./pages/registration/components/Instructions";
// import Instructions from "./pages/registration/components/detailsForm/DetailsForm"
import City from "./pages/city/City";
import Events from "./pages/events/Events";
// import ContactUs from "./pages/contactUs/ContactUs";
// import Preloader from "./pages/preloader/Preloader";
// import Ham from "./pages/ham/Ham";
// import GettingToPilani from "./pages/GettingToPilani/GettingToPilani";
import Brochure from "./pages/brochure/Brochure";
import ComingSoon from "./pages/comingSoon/ComingSoon";
import Speakers from "./pages/speakers/Speakers";
import Sponsors from "./pages/sponsors/Sponsors";
import MediaPartners from "./pages/mediaPartners/MediaPartners";

const RedirectToHome = () => {
  return <Navigate to="/" replace />;
};
const ExternalRedirect = () => {
  window.open("https://about.mappls.com", "_blank", "noopener");
  return null;
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
    component: ExternalRedirect,
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
    url: "/sponsors",
    component: Sponsors,
  },
  {
    url: "/media-partners",
    component: MediaPartners,
  },
  {
    url: "/index.html",
    component: RedirectToHome,
  },
];

const generateRoutes = (pages: page[]) => {
  return pages.map((page) => {
    return {
      path: page.url,

      element: <page.component />,
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
        element: <ComingSoon />,
      },
    ],
  },
]);

export default router;
