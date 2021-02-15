
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import Image from 'next/image';

const Map = (props) => {
    const [markers, setMarkers] = useState([{lat: .5, lng: .5}]);
    const [popup, setPopup] = useState([]);
    function EventsListener() {
        useMapEvents({
            click(e) {
                // if (click) click(e)
                console.log(e);
                const a = [].concat(markers);
                a.push({
                    lat: e.latlng.lat,
                    lng: e.latlng.lng
                });
                console.log(a);
                setMarkers(a);
            }
        })
        return null;
    }


    return (
        <MapContainer style={{height: "100vh"}} center={[.5, .5]} zoom={3} scrollWheelZoom={false}>
            <TileLayer
                noWrap={true}
                maxZoom={3}
                tileSize={256}
                url="tiles/{z}/{y}/{x}.jpg"
            />
            <EventsListener/>
            {markers.map((e) => (
                <Popup position={[e.lat, e.lng]}>
                    <div>
                        <Image
                            src="/images/icons/ic_camp.webp"
                            width={100}
                            height={100}
                        />
                    </div>
                </Popup>
            ))}
        </MapContainer>
    );
}

export default Map;