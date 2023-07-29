import L from "leaflet";

export default function toLatLng(array: number[]) {
  const convert = array.map((item: any) => new L.LatLng(item[0], item[1]));
  return convert;
}
