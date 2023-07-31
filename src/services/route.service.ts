import httpService from "./http.service";

const routeEndpoint = "/route/v1/driving/";

const requestSettings =
  "?steps=true&geometries=geojson&overview=full&generate_hints=false&skip_waypoints=true";

const routeService = {
  getRoute: async (points: string) => {
    try {
      const finalURL = routeEndpoint + points + requestSettings;
      const { data } = await httpService.get(finalURL);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default routeService;
