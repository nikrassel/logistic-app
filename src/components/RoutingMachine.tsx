import L from "leaflet";
// import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

export const CreateRoutineMachineLayer = (route: any) => {
  const instance = L.Routing.control({
    waypoints: [
      route
        ? L.latLng(route.pointOne[0], route.pointOne[1])
        : L.latLng(59.84660399, 30.29496392),
      route
        ? L.latLng(route.pointTwo[0], route.pointTwo[1])
        : L.latLng(59.83567701, 30.38064206),
      route
        ? L.latLng(route.pointThree[0], route.pointThree[1])
        : L.latLng(59.82934196, 30.42423701),
    ],
    router: L.Routing.osrmv1({
      serviceUrl: "http://router.project-osrm.org/route/v1/",
    }),
    show: false,
    // @ts-ignore
    lineOptions: { styles: [{ color: "red", weight: 4 }] },
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
    createMarker: function () {
      return null;
    },
  });
  return instance;
};

// const RoutingMachine = createControlComponent(CreateRoutineMachineLayer);

// export default RoutingMachine;
