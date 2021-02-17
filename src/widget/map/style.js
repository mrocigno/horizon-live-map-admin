import styled from "styled-components"
import { Container, Row, Col } from 'react-bootstrap';
import { MapContainer } from 'react-leaflet'

export const HorizonMapContainer = styled(MapContainer)`
    height: 100vh;
    background-color: black;
`;

export const PopupContainer = styled(Container)`
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
`;

export const PopupRow = styled(Row)`
    &:hover {
        background-color: #00000040;
        cursor: pointer;
    }
`;

export const ImageCol = styled.div`
    padding-left: 10px;
`;

export const TitleCol = styled(Col)`
    align-items: center;
    flex: 2;
    display: flex;
`;

export const SearchField = styled.input`
    width: 100%;
    margin: 10px 5px;
    height: 30px;
    border-radius: 15px;
    padding: 0px 30px 0px 10px;
    outline: none;
`;


// Form modal
export const DropzoneContainer = styled.div`
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    display: flex;
    height: 100px;
    overflow: hidden;
    position: relative;

    input {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    img {
        pointer-events: none;
        flex: 1;
        object-fit: cover;
    }
`;

export const DragActiveZone = styled.div`
    background-color: transparent;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    pointer-events: none;
    padding: 10px;

    div {
        flex: 1;
        border: 4px dashed gray;
        border-radius: 5px;
        align-items: center;
        justify-content: center;
        display: flex;
    }

    p {
        margin: 0;
        color: black;
        font-weight: bold;
    }
`;