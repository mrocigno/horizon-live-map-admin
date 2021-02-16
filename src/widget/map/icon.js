import L from 'leaflet';

export const HorizonIcon = ({image}) => new L.Icon({
    iconUrl: image,
    iconSize: new L.Point(50, 50),
    iconAnchor: new L.Point(25, 50)
})