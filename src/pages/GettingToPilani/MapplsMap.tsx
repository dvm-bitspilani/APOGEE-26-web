// components/MapplsMap.tsx
import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    mappls: any;
    initMap: () => void;
  }
}

interface MapplsMapProps {
  center?: [number, number]; // [lat, lng]
  zoom?: number;
  marker?: { lat: number; lng: number };
  markerIconUrl?: string;
  height?: string;
  className?: string;
}

const MAP_CONTAINER_ID = "mappls-map-container";

const MapplsMap: React.FC<MapplsMapProps> = ({
  center = [28.364012339660572, 75.58693005559708],
  zoom = 15,
  marker,
  markerIconUrl = "https://apis.mappls.com/map_v3/1.png",
  height = "300px",
  className = "",
}) => {
  const mapInstance = useRef<any>(null);
  const isScriptLoaded = useRef(false);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_MAPPLS_KEY;

    // Define the callback the SDK will call once loaded
    window.initMap = () => {
      if (mapInstance.current) return; // already initialized

      mapInstance.current = new window.mappls.Map(MAP_CONTAINER_ID, {
        center,
        zoom,
        zoomControl: true,
        location: true,
      });

      if (marker) {
        new window.mappls.Marker({
          map: mapInstance.current,
          position: { lat: marker.lat, lng: marker.lng },
          fitbounds: true,
          icon_url: markerIconUrl,
        });
      }
    };

    // If SDK is already on the page (e.g. hot reload), init directly
    if (window.mappls) {
      window.initMap();
      return;
    }

    // Avoid injecting the script twice
    if (isScriptLoaded.current) return;
    isScriptLoaded.current = true;

    const script = document.createElement("script");
    script.src = `https://sdk.mappls.com/map/sdk/web?v=3.0&access_token=${apiKey}&callback=initMap`;
    // script.src = `https://apis.mappls.com/advancedmaps/api/${apiKey}/map_sdk?layer=vector&v=3.0&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Remove map on unmount to avoid memory leaks
      mapInstance.current?.remove?.();
      mapInstance.current = null;
    };
  }, []); // only run once on mount

  return (
    <div
      id={MAP_CONTAINER_ID}
      className={className}
      style={{ width: "100%", height, borderRadius: "inherit" }}
    />
  );
};

export default MapplsMap;
