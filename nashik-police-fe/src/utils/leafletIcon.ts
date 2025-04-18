import L from "leaflet";

// This ensures Next.js can load the images correctly
export const DefaultIcon = L.icon({
  iconUrl: "/image/maps/marker-icon.png",
  iconRetinaUrl: "/image/maps/marker-icon-2x.png",
  shadowUrl: "/image/maps/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export const CustomIcon = L.icon({
    iconUrl: "/image/maps/map-marker.svg",
    iconRetinaUrl: "/image/maps/map-marker.svg",
    shadowUrl: "/image/maps/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });