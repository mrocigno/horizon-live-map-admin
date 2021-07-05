import { PopupContainer, PopupRow, ImageCol, TitleCol, SearchField, DropzoneContainer, DragActiveZone } from './style'
import { Popup } from 'react-leaflet';
import { icons } from '../../model/listIcons'
import Image from 'next/image';
import { useRef, useState, useCallback } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { Button, Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap';
import { useEffect } from 'react';

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

export const FormModal = ({props, show, onHide, onSave, data, listItem =  {
    image: String,
    title: String,
    position: [Number, Number]
}}) => {
    const [title, setTitle] = useState("");
    const [about, setAbout] = useState("");
    const [content, setContent] = useState("");
    const [images, setImages] = useState([]);
    const [imagesUrl, setImagesUrl] = useState([]);

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
                    {imagesUrl.length? (
                        imagesUrl.map((e) => <img src={`places/${e}`}/>)
                    ) : null}
                    {isDragActive? (
                        <DragActiveZone>
                            <div>
                                <p>Drop the files here ...</p>
                            </div>
                        </DragActiveZone>
                    ) : (
                        (images.length || imagesUrl.length)? null : (
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
            ...data,
            title,
            about,
            content,
            images,
            marker: listItem
        })
        clearAll();
    }

    function clearAll() {
        setContent("");
        setImages([]);
        setImagesUrl([]);
        setTitle("");
        setAbout("");            
    }

    useEffect(() => {
        console.log("model", data);
        setAbout(data?.about);
        setContent(data?.content);
        setTitle(data?.title);
        setImagesUrl(data?.images ?? []);
    }, [data])
    
    return (
        <Modal 
            show={show}
            onHide={onHide}>
            <ModalHeader>
                <ModalTitle style={{
                    width: "100%",
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'baseline',
                    justifyContent: 'space-between'
                }}>
                    {listItem?.title ?? ""}
                    <img
                        src={listItem?.image ?? ""}
                        width={30}
                        height={30}
                    />
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Container>
                    <Row>
                        <Col>
                            <label>Title</label>
                            <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>About</label>
                            <textarea className="form-control" value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
                        </Col>
                        <Col>
                            <label>Content</label>
                            <textarea className="form-control" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
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
                <Button variant="secondary" onClick={() => {
                    clearAll();
                    onHide();
                }}>
                    Cancel
                </Button>
                <Button disabled={data?.id} variant="primary" onClick={_onSave}>
                    Save
                </Button>
            </ModalFooter>
        </Modal>
    );    
}