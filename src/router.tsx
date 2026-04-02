import { createBrowserRouter } from "react-router-dom";
import Analytics from "./Analytics";
import Registration from "./pages/registration/Registration";
// import Instructions from "./pages/registration/components/Instructions";
// import Instructions from "./pages/registration/components/detailsForm/DetailsForm"
import City from "./pages/city/City";
import Events from "./pages/events/Events";
// import ContactUs from "./pages/contactUs/ContactUs";
// import Preloader from "./pages/preloader/Preloader";
// import Ham from "./pages/ham/Ham";
import GettingToPilani from "./pages/GettingToPilani/GettingToPilani";
import Brochure from "./pages/brochure/Brochure";
import ComingSoon from "./pages/comingSoon/ComingSoon";

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
  //   url: "/loader",

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
    component: ComingSoon, //! @rm -rf ~/, here :)
  }
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
    children: [...generateRoutes(pages)],
  },
]);

export default router;
