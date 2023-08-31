import { LatLngExpression } from "leaflet";
import { Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";

function GeoMap({ latAndLong }: { latAndLong: LatLngExpression }) {
  
  // return if the value is NaN, null, undefined
  if (
    (latAndLong as number[])?.[0] === undefined ||
    (latAndLong as number[])?.[0] === null ||
    Number.isNaN((latAndLong as number[])[0])
  )
    return;

  return (
    <MapContainer center={latAndLong} zoom={3} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={latAndLong}>
        <Popup>Hey there</Popup>
        <ZoomControl position="bottomright" />
      </Marker>
    </MapContainer>
  );
}

export default GeoMap;
