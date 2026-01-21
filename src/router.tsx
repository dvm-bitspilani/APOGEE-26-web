import { createBrowserRouter } from "react-router-dom";

import Registration from "./pages/registration/Registration";
// import Instructions from "./pages/registration/components/Instructions";
// import Instructions from "./pages/registration/components/detailsForm/DetailsForm"
import Landing from "./pages/landing/Landing";
type page = {
  url: string;

  component: React.ComponentType<any>;
};

const pages: page[] = [
  {
    url: "/",

    component: Landing,
  },

  {
    url: "/registration",

    component: Registration,
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

const router = createBrowserRouter([...generateRoutes(pages)]);

export default router;
