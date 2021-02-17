
import { useState } from 'react';
import L from 'leaflet'
import { Marker, TileLayer, useMapEvents } from 'react-leaflet';
import { AddPopup, FormModal } from './popup'
import { HorizonIcon } from './icon'
import { HorizonMapContainer } from './style';


const Map = (props) => {
    const [showModal, setShowModal] = useState(null);
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
        const data = {
            position,
            ...item
        }
        setShowModal(data);
        setPopup(null);
    }

    function onSave(data) {
        console.log(data);
        const newMarkers = [].concat(markers);
        newMarkers.push({
            position: data.marker.position,
            item: data.marker
        })
        setMarkers(newMarkers);
        send(data);
    }

    async function send(data) {
        const formData = new FormData();
        data.images.forEach((e) => formData.append("images", e))
        formData.append("about", data.about);
        formData.append("content", data.content);
        formData.append("marker", JSON.stringify(data.marker));
        formData.append("title", data.title);

        const teste = await fetch('/api/upload', {
            method: "POST",
            body: formData
        });
        console.log(teste);
    }

    return (
        <>
            <HorizonMapContainer
                center={[.5, .5]} 
                zoom={3}
                crs={L.CRS.Simple}
                maxBoundsViscosity={1.0}
                maxBounds={[
                    [0, 0],
                    [-255, 255]
                ]}>
                <TileLayer
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

            <FormModal
                show={showModal != null}
                onHide={() => setShowModal(null)}
                onSave={onSave}
                listItem={showModal}/>
        </>
    );
}

export default Map;