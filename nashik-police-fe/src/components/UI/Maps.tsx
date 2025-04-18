"use client";

import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { CustomIcon, DefaultIcon } from "@/utils/leafletIcon";
import { useEffect, useState } from "react";
import Data from '@/Data/data.json';

function ClickHandler({ setPosition }: { setPosition: (latlng: L.LatLng) => void }) {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
      },
    });
    return null;
  }

  const ChangeMapCenter = ({ center }: { center: L.LatLngExpression }) => {
    const map = useMap();
  
    useEffect(() => {
      map.setView(center, map.getZoom()); // or map.flyTo(center, zoom)
    }, [center, map]);
  
    return null;
  };

export default function Map({station}:any) {
    const stationName = Data.station[station as keyof typeof Data.station] as [number, number];
    const positions: [number, number] = [19.9975, 73.7898]; // Example: Nashik
    const [position, setPosition] = useState<L.LatLng | null>(null);
    const [center, setCenter] = useState<[number, number]>([19.9975, 73.7898]);

    useEffect(() => {
        if (stationName) {
          setCenter(stationName); // update center when stationName changes
        }
      }, [stationName]);
      

if (!stationName){
    return (
        <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{ height: "600px", width: "100%" ,zIndex:"0", borderRadius:"24px"}}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
            <ChangeMapCenter center={center} />
          <Marker position={positions} icon={DefaultIcon}>
            <Popup>{station}, नाशिक, महाराष्ट्र  ४२२०१०</Popup>
          </Marker>
          <ClickHandler setPosition={setPosition} />
          {position && (
            <Marker position={position} icon={CustomIcon}>
              <Popup>
                Latitude: {position.lat.toFixed(5)} <br />
                Longitude: {position.lng.toFixed(5)}
              </Popup>
            </Marker>
          )}
        </MapContainer>
      );
}else{
    return (
        <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{ height: "600px", width: "100%" ,zIndex:"0", borderRadius:"24px"}}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
            <ChangeMapCenter center={center} />
          <Marker position={stationName} icon={DefaultIcon}>
            <Popup>{station}, नाशिक, महाराष्ट्र  ४२२०१०</Popup>
          </Marker>
          <ClickHandler setPosition={setPosition} />
          {position && (
            <Marker position={position} icon={CustomIcon}>
              <Popup>
                Latitude: {position.lat.toFixed(5)} <br />
                Longitude: {position.lng.toFixed(5)}
              </Popup>
            </Marker>
          )}
        </MapContainer>
      );
} 
}
