import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-TCGE08DBHC";

export default function Analytics() {
  const location = useLocation();

  // init once
  useEffect(() => {
    if (window.location.hostname.includes("www.bits-apogee.org")) {
      ReactGA.initialize(TRACKING_ID);
    }
  }, []);

  // track page change
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return <Outlet />;
}
