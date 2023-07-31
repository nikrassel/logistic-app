import axios from "axios";
const http = axios.create({
  baseURL: "http://router.project-osrm.org",
});

const httpService = {
  get: http.get,
};
export default httpService;
