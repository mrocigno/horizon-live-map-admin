
import { useState } from 'react';
import { Marker, TileLayer, useMapEvents } from 'react-leaflet';
import { AddPopup } from './popup'
import { HorizonIcon } from './icon'
import image from 'next/image';
import { HorizonMapContainer } from './style';

const Map = (props) => {
    const [markers, setMarkers] = useState([]);
    const [popup, setPopup] = useState(null);
    function EventsListener() {
        useMapEvents({
            click(e) {
                setPopup({
                    lat: e.latlng.lat,
                    lng: e.latlng.lng
                });
            }
        })
        return null;
    }

    function onSelectPopupItem(position, item) {
        console.log(position, item);
        const newMarkers = [].concat(markers);
        newMarkers.push({
            position: position,
            item: item
        })
        setMarkers(newMarkers);
        setPopup(null);
    }
    
    return (
        <HorizonMapContainer
            center={[.5, .5]} 
            zoom={3}
            maxBoundsViscosity={1.0}
            maxBounds={[
                [85, -179],
                [-85, 179]
            ]}>
            
            <TileLayer
                noWrap={true}
                maxZoom={3}
                tileSize={256}
                url="tiles/{z}/{y}/{x}.jpg"
            />

            <EventsListener/>

            {(popup? (
                <AddPopup 
                    position={[popup.lat, popup.lng]} 
                    onClick={onSelectPopupItem}/>
            ) : (null))}

            {markers.map((e) => 
                <Marker
                    position={e.position}
                    icon={HorizonIcon({
                        image: e.item.image
                    })}
                />
            )}

        </HorizonMapContainer>
    );
}

export default Map;