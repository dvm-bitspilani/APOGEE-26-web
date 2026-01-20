import { createBrowserRouter } from "react-router-dom";

import Registration from "./pages/registration/Registration";
import Instructions from "./pages/registration/components/Instructions";
import Landing from "./pages/landing/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/registration",
    element: <Registration />,
    children: [
      {
        path: "instructions",
        element: <Instructions />,
      },
    ],
  },
]);

export default router;
