import { PopupContainer, PopupRow, ImageCol, TitleCol, SearchField } from './style'
import { Popup } from 'react-leaflet';
import { icons } from '../../model/listIcons'
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Row } from 'react-bootstrap';

export const AddPopup = ({
    props,
    position,
    onClick
}) => {
    const [filter, setFilter] = useState("");

    function filterChange(event) {
        setFilter(event.target.value);
    }

    function onclick(event, item) {
        onClick?.call(null, position, item)
    }

    function getIcons() {
        if (filter !== "") {
            return icons.filter((e) => {
                let i = e.title.toLowerCase().indexOf(filter.toLowerCase());
                return i >= 0
            })
        } else {
            return icons;
        }
    }

    return (
        <Popup position={position}>
            <PopupContainer>
                <Row>
                    <SearchField type="text" onChange={filterChange}/>
                </Row>
                {getIcons().map((item) => {
                    return (
                        <PopupRow 
                            onClick={(event) => onclick(event, item)}>
                            <ImageCol>
                                <Image
                                    src={item.image}
                                    width={30}
                                    height={30}
                                />
                            </ImageCol>
                            <TitleCol>{item.title}</TitleCol>
                        </PopupRow>
                    )
                })}
            </PopupContainer>
        </Popup>
    );
}