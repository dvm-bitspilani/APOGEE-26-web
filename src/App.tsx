import { RouterProvider } from "react-router-dom";
// import styles from "App.module.scss";
import router from "./router";
import { RegistrationProvider } from "./pages/components/RegistrationClosed/RegistrationClosed";
import RoutePrefetch from "./pages/components/RoutePrefetch";

function App() {
  return (
    <RegistrationProvider>
      <RoutePrefetch />
      <RouterProvider router={router} />
    </RegistrationProvider>
  )
}

export default App
