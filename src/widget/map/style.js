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