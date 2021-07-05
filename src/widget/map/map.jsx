
import { useState } from 'react';
import L from 'leaflet'
import { Marker, TileLayer, useMapEvents } from 'react-leaflet';
import { AddPopup, FormModal } from './popup'
import { HorizonIcon } from './icon'
import { HorizonMapContainer } from './style';
import { useEffect } from 'react';


const Map = (props) => {
    const [showModal, setShowModal] = useState(null);
    const [showModalToEdit, setShowModalToEdit] = useState(null);
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
        const newMarkers = [data].concat(markers);
        setMarkers(newMarkers);
        console.log(markers);
        send(data);
    }

    async function loadMarkers() {
        const data = await (await fetch('/api/data', {
            method: "GET"
        })).json()
        console.log(data);
        
        setMarkers(data)
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

    useEffect(async () => {
        await loadMarkers();
        console.log("effect");
    }, []);

    return (
        <>
            <HorizonMapContainer
                center={[.5, .5]} 
                zoom={3}
                crs={L.CRS.Simple}
                maxBoundsViscosity={1.0}
                maxBounds={[
                    [0, 0],
                    [-500, 500]
                ]}>
                <TileLayer
                    maxZoom={4}
                    tileSize={250}
                    url="new_tiles/{z}/{y}/{x}.jpg"
                />

                <EventsListener/>

                {(popup? (
                    <AddPopup 
                        position={[popup.lat, popup.lng]} 
                        onClick={onSelectPopupItem}/>
                ) : (null))}

                {markers.map((e, i) => 
                    <Marker
                        eventHandlers={{
                            click: (e) => {
                                console.log(markers[i]);
                                setPopup(null);
                                setShowModalToEdit(markers[i]);
                            }
                        }}
                        zIndexOffset={i}
                        position={e.marker.position}
                        icon={HorizonIcon({
                            image: e.marker.image
                        })}
                    />
                )}

            </HorizonMapContainer>

            <FormModal
                show={(showModal != null || showModalToEdit != null)}
                onHide={() => {
                    setPopup(null)
                    setShowModal(null)
                    setShowModalToEdit(null)
                }}
                onSave={onSave}
                data={showModalToEdit}
                listItem={showModal ?? showModalToEdit?.marker}/>
        </>
    );
}

export default Map;