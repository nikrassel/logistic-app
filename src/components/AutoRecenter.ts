import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { IPoints } from "../models";

const AutoRecenter = ({
  routePoints,
}: {
  routePoints: IPoints[] | undefined;
}) => {
  const map = useMap();
  useEffect(() => {
    if (routePoints) {
      map.fitBounds(routePoints.map((item: any) => item.geocode));
    }
  }, [map, routePoints]);
  return null;
};

export default AutoRecenter;
