import { PopupContainer, PopupRow, ImageCol, TitleCol, SearchField, DropzoneContainer, DragActiveZone } from './style'
import { Popup } from 'react-leaflet';
import { icons } from '../../model/listIcons'
import Image from 'next/image';
import { useRef, useState, useCallback } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { Button, Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap';

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

export const FormModal = ({props, show, onHide, onSave, listItem =  {
    image: String,
    title: String,
    position: [Number, Number]
}}) => {
    const [title, setTitle] = useState("");
    const [about, setAbout] = useState("");
    const [content, setContent] = useState("");
    const [images, setImages] = useState([]);

    function MyDropzone() {
        const onDrop = useCallback(files => {
            setImages(files.concat(images));
        }, [images])
        const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

        function Body() {
            return (
                <>
                    {images.length? (
                        images.map((e) => <img src={URL.createObjectURL(e)}/>)
                    ) : null}
                    {isDragActive? (
                        <DragActiveZone>
                            <div>
                                <p>Drop the files here ...</p>
                            </div>
                        </DragActiveZone>
                    ) : (
                        images.length? null : (
                            <div>
                                <p>Drag 'n' drop some files here, or click to select files</p>
                            </div>
                        )
                    )}
                </>
            );
        }

        return (
            <DropzoneContainer {...getRootProps()}>
                <Body/>
                <input {...getInputProps()} />
            </DropzoneContainer>
        );
    }
    
    function _onSave() {
        onHide();
        onSave?.call(null, {
            title,
            about,
            content,
            images,
            marker: listItem
        })
        setContent("");
        setImages([]);
        setTitle("");
        setAbout("");
    }

    return (
        <Modal 
            show={show}
            onHide={onHide}>
            <ModalHeader>
                <ModalTitle>Teste</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Container>
                    <Row>
                        <Col>
                            <label>Title</label>
                            <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>About</label>
                            <textarea className="form-control" onChange={(e) => setAbout(e.target.value)}></textarea>
                        </Col>
                        <Col>
                            <label>Content</label>
                            <textarea className="form-control" onChange={(e) => setContent(e.target.value)}></textarea>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Images</label>
                            <MyDropzone/>
                        </Col>
                    </Row>
                </Container>
            </ModalBody>
            <ModalFooter>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={_onSave}>
                    Save
                </Button>
            </ModalFooter>
        </Modal>
    );    
}