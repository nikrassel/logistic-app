import { useEffect } from "react";
import { useMap } from "react-leaflet";

// @ts-ignore
const AutoRecenter = ({ routePoints }) => {
  const map = useMap();
  useEffect(() => {
    if (routePoints) {
      map.fitBounds(routePoints.map((item: any) => item.geocode));
    }
  }, [map, routePoints]);
  return null;
};

export default AutoRecenter;
