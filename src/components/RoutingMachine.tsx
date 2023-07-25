import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const CreateRoutineMachineLayer = (props: any) => {
  const chosenRoute = props.route;
  const instance = L.Routing.control({
    waypoints: [
      chosenRoute
        ? L.latLng(chosenRoute.pointOne[0], chosenRoute.pointOne[1])
        : L.latLng(59.84660399, 30.29496392),
      chosenRoute
        ? L.latLng(chosenRoute.pointTwo[0], chosenRoute.pointTwo[1])
        : L.latLng(59.83567701, 30.38064206),
      chosenRoute
        ? L.latLng(chosenRoute.pointThree[0], chosenRoute.pointThree[1])
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

const RoutingMachine = createControlComponent(CreateRoutineMachineLayer);

export default RoutingMachine;
