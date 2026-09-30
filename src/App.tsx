import { RouterProvider } from "react-router-dom";
// import styles from "App.module.scss";
import router from "./router";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider><aside className="archive-notice">Portfolio archive · APOGEE 2026 · Registration is a local demo</aside>
    </>
  )
}

export default App
